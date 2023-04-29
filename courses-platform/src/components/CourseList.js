import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Aqui você pode fazer uma chamada à API para obter a lista de cursos
    // Por enquanto, vamos usar um exemplo de lista de cursos
    const exampleCourses = [
      { id: 1, title: 'Curso 1', description: 'Esta é uma descrição de exemplo para o curso 1.' },
      { id: 2, title: 'Curso 2', description: 'Esta é uma descrição de exemplo para o curso 2.' },
      { id: 3, title: 'Curso 3', description: 'Esta é uma descrição de exemplo para o curso 3.' },
      { id: 4, title: 'Curso 4', description: 'Esta é uma descrição de exemplo para o curso 4.' },
    ];

    setCourses(exampleCourses);
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de cursos
        </Typography>
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item key={course.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {course.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/course/${course.id}`}
                  >
                    Acessar curso
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default CourseList;
