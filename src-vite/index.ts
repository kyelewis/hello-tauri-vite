import { invoke } from '@tauri-apps/api/tauri';

const handleOnClickHelloWorld = () => invoke('hello_world');

document.getElementById('hello_world').addEventListener('click', handleOnClickHelloWorld);
