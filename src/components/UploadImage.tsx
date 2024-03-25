'use client';
import React, { ChangeEvent, useState } from 'react';

interface UploadImageProps {
    onFileSelect: (file: File) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onFileSelect }) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            onFileSelect(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <label
            htmlFor="dropzone-file"
            className="w-full md:w-2/3 lg:w-full h-[300px] md:h-[300px] lg:h-[500px] flex items-center justify-center rounded-2xl bg-gray-200 cursor-pointer"
        >
            {imagePreviewUrl ? (
                <img
                    src={imagePreviewUrl}
                    alt="Uploaded"
                    className="w-full h-full object-cover rounded-2xl border-2 shadow-md"
                />
            ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        {/* <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        /> */}
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{' '}
                        or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                </div>
            )}
            <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
            />
        </label>
    );
};

export default UploadImage;
