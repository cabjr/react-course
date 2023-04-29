import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Aqui você pode fazer uma chamada à API para obter os dados do curso usando o ID
    // Por enquanto, vamos usar um exemplo de objeto de curso
    const exampleCourse = {
      id: 1,
      title: 'Curso Exemplo',
      description: 'Esta é uma descrição de exemplo para o curso.',
      videoUrl: 'https://www.example.com/video.mp4',
    };

    setCourse(exampleCourse);
  }, [id]);

  if (!course) {
    return <Typography variant="h6">Carregando curso...</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {course.description}
        </Typography>
        <Box my={2}>
          <video
            src={course.videoUrl}
            controls
            style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Course;
