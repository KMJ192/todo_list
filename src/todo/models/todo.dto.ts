export interface TodoListBody {
  subject: string;
  content: string;
  date: string;
}

export interface TodoListDeleteBody {
  id: number;
}

export type TodoListUpdateBody = TodoListBody & TodoListDeleteBody;

export interface TodoListDTO {
  id: number;
  subject: string;
  content: string;
  date: string;
  create_date: string;
  update_date: string;
}
