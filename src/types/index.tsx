export interface ChoiceProps {
  handleClick: (choice: string) => void;
}

export interface RoundProps {
  userChoice: string;
  computerChoice: string;
  win: boolean | null;
  handlePlayAgain: () => void;
}
