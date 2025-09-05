import type { NextApiRequest, NextApiResponse } from "next";
import { initializeFirebaseAdmin } from "@/utils/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { adminDb } = initializeFirebaseAdmin();
      const docRef = adminDb.collection("analytics").doc("visitorCount");

      await docRef.set(
        { count: FieldValue.increment(1) },
        { merge: true }
      );

      const updatedDoc = await docRef.get();
      const updatedCount = updatedDoc.data()?.count ?? 1;

      res.status(200).json({ count: updatedCount });
    } catch (error) {
      console.error("Error updating visitor count:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
