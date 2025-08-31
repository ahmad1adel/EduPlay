import React, { useState } from 'react';
import { Search, Bell, Mail, Upload, Calendar, Plus, X, User, Clock, Link } from 'lucide-react';

interface Chapter {
  chapter: number;
  title: string;
  duration: string;
  url: string;
}

interface CourseData {
  slug: string;
  title: string;
  imageUrl: string;
  instructor: string;
  enrollmentType: string;
  chapters: Chapter[];
  startDate: string;
  endDate: string;
}

const CourseCreation: React.FC = () => {
  const [courseData, setCourseData] = useState<CourseData>({
    slug: '',
    title: '',
    imageUrl: '',
    instructor: '',
    enrollmentType: 'Continuous enrollment',
    chapters: [
      { chapter: 1, title: '', duration: '', url: '' },
      { chapter: 2, title: '', duration: '', url: '' }
    ],
    startDate: '',
    endDate: ''
  });

  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleInputChange = (field: keyof CourseData, value: any) => {
    setCourseData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-generate slug when title changes
      if (field === 'title') {
        updated.slug = generateSlug(value);
      }
      
      return updated;
    });
  };

  const handleChapterChange = (chapterNumber: number, field: keyof Chapter, value: string) => {
    setCourseData(prev => ({
      ...prev,
      chapters: prev.chapters.map(chapter =>
        chapter.chapter === chapterNumber 
          ? { ...chapter, [field]: value }
          : chapter
      )
    }));
  };

  const addChapter = () => {
    const newChapterNumber = courseData.chapters.length + 1;
    const newChapter: Chapter = {
      chapter: newChapterNumber,
      title: '',
      duration: '',
      url: ''
    };
    setCourseData(prev => ({
      ...prev,
      chapters: [...prev.chapters, newChapter]
    }));
  };

  const removeChapter = (chapterNumber: number) => {
    setCourseData(prev => ({
      ...prev,
      chapters: prev.chapters
        .filter(chapter => chapter.chapter !== chapterNumber)
        .map((chapter, index) => ({ ...chapter, chapter: index + 1 }))
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        // In a real app, you'd upload this to your server/cloud storage
        // For now, we'll create a local URL
        const imageUrl = URL.createObjectURL(file);
        handleInputChange('imageUrl', imageUrl);
        setPreviewImage(imageUrl);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload this to your server/cloud storage
      const imageUrl = URL.createObjectURL(file);
      handleInputChange('imageUrl', imageUrl);
      setPreviewImage(imageUrl);
    }
  };

  const handlePublish = () => {
    // Validate required fields
    if (!courseData.title || !courseData.instructor || !courseData.imageUrl) {
      alert('Please fill in all required fields (Title, Instructor, Cover Image)');
      return;
    }

    // Validate chapters
    const incompleteChapters = courseData.chapters.filter(
      chapter => !chapter.title || !chapter.duration || !chapter.url
    );
    
    if (incompleteChapters.length > 0) {
      alert('Please complete all chapter information (Title, Duration, URL)');
      return;
    }

    // This would be sent to your backend API
    const coursePayload = {
      slug: courseData.slug,
      title: courseData.title,
      imageUrl: courseData.imageUrl,
      enrollmentType: courseData.enrollmentType,
      instructor: courseData.instructor, // In real app, this would be instructor ID
      chapters: courseData.chapters,
      startDate: courseData.startDate,
      endDate: courseData.endDate
    };

    console.log('Publishing course:', coursePayload);
    
    // Here you would make an API call to your backend
    // fetch('/api/courses', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(coursePayload)
    // });
    
    alert('Course published successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Course Creation</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Swetha shankaresh</p>
                    <p className="text-xs text-gray-500">Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Upload New Course</h2>
          </div>

          <div className="p-8 space-y-8">
            {/* Title and Slug */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={courseData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Mathematics Department"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Slug
                </label>
                <input
                  type="text"
                  value={courseData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="auto-generated from title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400 bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">URL-friendly version of the title</p>
              </div>
            </div>

            {/* Instructor and Enrollment Type */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructor Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={courseData.instructor}
                  onChange={(e) => handleInputChange('instructor', e.target.value)}
                  placeholder="e.g., Dr. Sarah Johnson"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enrollment Type
                </label>
                <select
                  value={courseData.enrollmentType}
                  onChange={(e) => handleInputChange('enrollmentType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                >
                  <option value="Continuous enrollment">Continuous enrollment</option>
                  <option value="Fixed schedule">Fixed schedule</option>
                  <option value="Self-paced">Self-paced</option>
                </select>
              </div>
            </div>

            {/* Cover Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Upload Cover Image <span className="text-red-500">*</span>
              </label>
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {previewImage ? (
                  <div className="relative">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="max-h-48 mx-auto rounded-lg shadow-md"
                    />
                    <button
                      onClick={() => {
                        setPreviewImage(null);
                        handleInputChange('imageUrl', '');
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600 mb-1">
                        Upload cover image
                      </p>
                      <p className="text-sm text-gray-500">
                        Drop your file here or click to browse
                      </p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Course Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Course Content
              </label>
              <div className="space-y-4">
                {courseData.chapters.map((chapter) => (
                  <div
                    key={chapter.chapter}
                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-gray-900">Chapter {chapter.chapter}</h4>
                      {courseData.chapters.length > 2 && (
                        <button
                          onClick={() => removeChapter(chapter.chapter)}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                          Chapter Title
                        </label>
                        <input
                          type="text"
                          value={chapter.title}
                          onChange={(e) => handleChapterChange(chapter.chapter, 'title', e.target.value)}
                          placeholder="e.g., Introduction to Algebra"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                          Duration
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            value={chapter.duration}
                            onChange={(e) => handleChapterChange(chapter.chapter, 'duration', e.target.value)}
                            placeholder="e.g., 1 hr 30 mins"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                          Video URL
                        </label>
                        <div className="relative">
                          <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="url"
                            value={chapter.url}
                            onChange={(e) => handleChapterChange(chapter.chapter, 'url', e.target.value)}
                            placeholder="https://example.com/video.mp4"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={addChapter}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200 border border-blue-200 hover:border-blue-300"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Chapter</span>
                </button>
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={courseData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={courseData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Course Data Preview */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Course Data Preview</h3>
              <pre className="text-sm text-gray-600 bg-white p-4 rounded border overflow-x-auto">
                {JSON.stringify(courseData, null, 2)}
              </pre>
            </div>

            {/* Publish Button */}
            <div className="flex justify-center pt-8">
              <button
                onClick={handlePublish}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Publish Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCreation;