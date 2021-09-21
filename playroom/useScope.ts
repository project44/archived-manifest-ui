import { usePlayroomStore } from './playroomState';

export default function useScope() {
  return {
    ...usePlayroomStore(),
  };
}
