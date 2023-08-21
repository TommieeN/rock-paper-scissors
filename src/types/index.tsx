export interface ChoiceProps {
  handleClick: (choice: string) => void;
}

export interface ResultProps {
  userChoice: string;
  computerChoice: string | null;
  win: boolean | null;
  handlePlayAgain: () => void;
}

export interface UserProps {
  userChoice: string;
}

export interface ComputerChoice {
  computerChoice: string;
}
