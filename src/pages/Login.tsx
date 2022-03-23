import { Button, Stack, Paper, Container, OutlinedInput } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <>
      <Container fixed>
        <Paper variant="outlined" elevation={1} sx={{ my: 30, mx: 30 }}>
          <Stack direction="column" justifyContent="center" spacing={1} m={2}>
            <OutlinedInput fullWidth placeholder="ID" />
            <OutlinedInput fullWidth placeholder="Password" />
            <Button fullWidth variant="contained" color="primary">
              로그인
            </Button>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row">
                <Button color="primary">아이디 찾기</Button>
                <Button color="primary">비밀번호 찾기</Button>
              </Stack>
              <Stack direction="row">
                <Button color="primary">회원가입</Button>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
