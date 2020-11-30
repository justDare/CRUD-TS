interface EmployeeI {
  id: number;
  name: string;
  code: string;
  profession: string;
  color: string;
  city: string;
  branch: string;
  assigned: boolean;
}

type EmployeeState = {
  employees: Array<EmployeeI>;
};

type EmployeeAction = {
  type: string;
  payload: any;
};

type MessageState = {
  message: string;
  status: string;
};

type MessageAction = {
  type: string;
  message: string;
  status: string;
};

type config = {
  headers: {
    "Content-type": string;
    "x-auth-token"?: string | undefined;
  };
};
