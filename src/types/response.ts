export type Response = {
    current_permission: number;
    data: any;
    error: null|string;
    error_code: null|String;
    errors:null|Object;
    exception:null|String;
    message:null|String;
    trace:null|String;
    [key: string]: any;
  };

export type AxiosSuccessResponse ={
    data: Response;
    [key: string]: any;
}

export type AxiosErrorResponse ={
    data: Response;
    [key: string]: any;
}
  
export type LoginData = {
    device:any;
    token:any;
    user:any;
}