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
      id: '68688f47dd572e8e12a6455a',
      title: 'Mathematics Department',
      imageUrl: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      enrollmentType: 'Continuous enrollment',
      instructor: instructors.math,
      enrolledStudents: students,
      moreStudentsCount: 27,
      chapters: [
        {
          chapter: 1,
          title: 'Introduction to Algebra',
          duration: '1 hr 30 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
          chapter: 2,
          title: 'Linear Equations',
          duration: '1 hr 45 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
          chapter: 3,
          title: 'Quadratic Equations',
          duration: '2 hrs',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          chapter: 4,
          title: 'Polynomials',
          duration: '1 hr 15 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          chapter: 5,
          title: 'Trigonometry Basics',
          duration: '1 hr 30 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        }
      ]
    },
    {
      id: '68688f47dd572e8e12a64561',
      title: 'Chemistry Department',
      imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      enrollmentType: 'Continuous enrollment',
      instructor: instructors.chemistry,
      enrolledStudents: students,
      moreStudentsCount: 27,
      chapters: [
        {
          chapter: 1,
          title: 'Introduction to Chemistry',
          duration: '1 hr 20 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675818/nwmtbolfedd59rwoekzd.mp4'
        },
        {
          chapter: 2,
          title: 'Atomic Structure & Isotopes',
          duration: '1 hr 45 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675670/uyrkcfwjcxmmfuorjk3f.mp4'
        },
        {
          chapter: 3,
          title: 'Periodic Table and Trends',
          duration: '2 hrs',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          chapter: 4,
          title: 'Chemical Bonding and Molecular Geometry',
          duration: '1 hr 30 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          chapter: 5,
          title: 'Stoichiometry and Chemical Reactions',
          duration: '1 hr 50 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        }
      ]
    },
    {
      id: '68688f47dd572e8e12a64568',
      title: 'Physics Department',
      imageUrl: 'https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      enrollmentType: 'Continuous enrollment',
      instructor: instructors.physics,
      enrolledStudents: students,
      moreStudentsCount: 27,
      chapters: [
        {
          chapter: 1,
          title: 'Introduction to Physics',
          duration: '1 hr 15 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751680154/dvtamgkdijkg9obeiue6.mp4'
        },
        {
          chapter: 2,
          title: 'Kinematics: Motion in One Dimension',
          duration: '1 hr 40 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675754/t6vzg2py46wa6wmpnz6m.mp4'
        },
        {
          chapter: 3,
          title: "Dynamics: Forces and Newton's Laws",
          duration: '2 hrs',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          chapter: 4,
          title: 'Work, Energy, and Power',
          duration: '1 hr 30 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          chapter: 5,
          title: 'Waves and Oscillations',
          duration: '1 hr 45 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        }
      ]
    },
    {
      id: '68688f47dd572e8e12a6456f',
      title: 'Computer Science Department',
      imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      enrollmentType: 'Continuous enrollment',
      instructor: instructors.computerScience,
      enrolledStudents: students,
      moreStudentsCount: 27,
      chapters: [
        {
          chapter: 1,
          title: 'Introduction to Computer Science',
          duration: '1 hr 10 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675286/i7t2tyu3rkbnfymqa7r2.mp4'
        },
        {
          chapter: 2,
          title: 'Data Structures & Arrays',
          duration: '1 hr 35 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675616/ycka1jjopakfghfs5ppf.mp4'
        },
        {
          chapter: 3,
          title: 'Algorithms: Sorting & Searching',
          duration: '2 hrs',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          chapter: 4,
          title: 'Object-Oriented Programming',
          duration: '1 hr 45 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          chapter: 5,
          title: 'Databases & SQL Basics',
          duration: '1 hr 30 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        }
      ]
    },
    {
      id: '68688f47dd572e8e12a64576',
      title: 'English Department',
      imageUrl: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      enrollmentType: 'Continuous enrollment',
      instructor: instructors.english,
      enrolledStudents: students,
      moreStudentsCount: 27,
      chapters: [
        {
          chapter: 1,
          title: 'Introduction to English Language & Literature',
          duration: '1 hr 20 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675099/fv7qblligqbbc53wb9yl.mp4'
        },
        {
          chapter: 2,
          title: 'Grammar Fundamentals',
          duration: '1 hr 30 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751674965/cx1skmdgh3noi3t36kjz.mp4'
        },
        {
          chapter: 3,
          title: 'Vocabulary Building & Usage',
          duration: '1 hr 45 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          chapter: 4,
          title: 'Reading Comprehension Strategies',
          duration: '1 hr 25 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          chapter: 5,
          title: 'Writing Techniques: Essays & Creative Writing',
          duration: '1 hr 40 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        }
      ]
    },
    {
      id: '68688f47dd572e8e12a6457d',
      title: 'Social Science Department',
      imageUrl: 'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      enrollmentType: 'Continuous enrollment',
      instructor: instructors.socialScience,
      enrolledStudents: students,
      moreStudentsCount: 27,
      chapters: [
        {
          chapter: 1,
          title: 'Introduction to Social Sciences',
          duration: '1 hr 15 mins',
          url: 'https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675715/ilafyvrsmkwxx82z1m1m.mp4'
        },
        {
          chapter: 2,
          title: 'Sociology: Society & Culture',
          duration: '1 hr 40 mins',
          url: ' https://res.cloudinary.com/dmonq6j7g/video/upload/v1751675165/wk9mqta0wrkfyz0ut9jr.mp4'

        },
        {
          chapter: 3,
          title: 'Psychology: Understanding Human Behavior',
          duration: '1 hr 45 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          chapter: 4,
          title: 'Economics: Principles & Systems',
          duration: '2 hrs',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          chapter: 5,
          title: 'Political Science: Governance & Policy',
          duration: '1 hr 30 mins',
          url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        }
      ]
    },
  ];