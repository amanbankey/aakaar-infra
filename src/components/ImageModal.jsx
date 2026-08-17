import React from "react";
import { X, Download, Maximize2 } from "lucide-react";

export default function UploadContracts({ onClose, img }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-4xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Image Preview
            </h2>
            <p className="text-xs text-gray-500">
              Preview your Image document
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Download */}
            {img && (
              <a
                href={img}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                title="Download"
              >
                <Download size={18} />
              </a>
            )}

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Image Preview */}
        <div className="flex-1 overflow-auto bg-gray-100 p-3 sm:p-6">
          {img ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <img
                src={img}
                alt="Contract Preview"
                className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-md"
              />
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-sm text-gray-500">
                No document available
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3 sm:px-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}