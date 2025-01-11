import React, { useState, useRef } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { UseFirebase } from './hooks/hooks';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';

interface FileUploadProps {
  onUploadComplete?: (url: string) => void;
  folder?: string;
}

const ImageUpload: React.FC<FileUploadProps> = ({ 
  onUploadComplete,
  folder = 'images'
}) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {storage} = UseFirebase();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setSelectedFile(file);
    setError(null);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploading(true);
      setError(null);

      // Create unique filename
      const filename = `${Date.now()}-${selectedFile.name}`;
      const storageRef = ref(storage, `${folder}/${filename}`);

      // Upload file
      await uploadBytes(storageRef, selectedFile);

      // Get download URL
      const downloadUrl = await getDownloadURL(storageRef);
      
      if (onUploadComplete) {
        onUploadComplete(downloadUrl);
      }

      // Clear the selection after successful upload
      clearPreview();
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const clearPreview = () => {
    setPreview(null);
    setError(null);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Upload Area */}
      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={uploading}
        />
        
        {/* Preview or Upload Icon */}
        {preview ? (
          <div className="relative">
            <Image
              src={preview} 
              alt="Preview" 
              className="max-h-48 mx-auto rounded"
            />
            <button
              onClick={clearPreview}
              className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="text-gray-600">
            <Upload className="mx-auto h-12 w-12 mb-2" />
            <p className="text-sm">
              Drag and drop an image, or click to select
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG up to 5MB
            </p>
          </div>
        )}
        
        {/* Loading State */}
        {uploading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>

      {/* Upload Button */}
      {selectedFile && !uploading && (
        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <Upload className="w-5 h-5 mr-2" />
          Upload Image
        </button>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default ImageUpload;