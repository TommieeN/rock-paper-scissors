export interface ChoiceProps {
  handleClick: (choice: string) => void;
}

export interface ResultProps {
  userChoice: string;
  computerChoice: string;
  win: boolean | null;
  handlePlayAgain: () => void;
}

export interface UserProps {
  userChoice: string;
}

