// Instructors
const instructors = {
  math: {
    id: 'ins-1',
    name: 'Dr. Sarah Johnson',
    avatarUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  chemistry: {
    id: 'ins-2',
    name: 'Dr. Robert Chen',
    avatarUrl: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  physics: {
    id: 'ins-3',
    name: 'Dr. Alan Cooper',
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  computerScience: {
    id: 'ins-4',
    name: 'Prof. James Wilson',
    avatarUrl: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  english: {
    id: 'ins-5',
    name: 'Dr. Emily Brown',
    avatarUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  socialScience: {
    id: 'ins-6',
    name: 'Prof. Michael Davis',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
};

// Students (common across courses)
const students = [
  {
    id: 'stu-1',
    name: 'Alex Smith',
    avatarUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'stu-2',
    name: 'Emma Wilson',
    avatarUrl: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'stu-3',
    name: 'John Davis',
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Course data
export const courses = [
  {
    id: 'course-1',
    title: 'Mathematics Department',
    imageUrl: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    enrollmentType: 'Continuous enrollment',
    instructor: instructors.math,
    enrolledStudents: students,
    moreStudentsCount: 27
  },
  {
    id: 'course-2',
    title: 'Chemistry Department',
    imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    enrollmentType: 'Continuous enrollment',
    instructor: instructors.chemistry,
    enrolledStudents: students,
    moreStudentsCount: 27
  },
  {
    id: 'course-3',
    title: 'Physics Department',
    imageUrl: 'https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    enrollmentType: 'Continuous enrollment',
    instructor: instructors.physics,
    enrolledStudents: students,
    moreStudentsCount: 27
  },
  {
    id: 'course-4',
    title: 'Computer Science Department',
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    enrollmentType: 'Continuous enrollment',
    instructor: instructors.computerScience,
    enrolledStudents: students,
    moreStudentsCount: 27
  },
  {
    id: 'course-5',
    title: 'English Department',
    imageUrl: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    enrollmentType: 'Continuous enrollment',
    instructor: instructors.english,
    enrolledStudents: students,
    moreStudentsCount: 27
  },
  {
    id: 'course-6',
    title: 'Social Science Department',
    imageUrl: 'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    enrollmentType: 'Continuous enrollment',
    instructor: instructors.socialScience,
    enrolledStudents: students,
    moreStudentsCount: 27
  }
];