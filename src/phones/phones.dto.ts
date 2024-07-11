export class phoneType {
  //used for writing types
  id?: number;
  phone_name: string;
  phone_description: string;
  price: number;
}

export function handleSuccess(
  res: any,
  code: number,
  status: boolean,
  data: any,
) {
  //reuseable function
  console.log('success response', data);
  return res.status(code).send({
    success: status,
    data: data,
  });
}


export function handleError(
    res: any,
    code: number,
    message: string,
  ) {
    return res.status(code).send({
      success: false,
      message: message,
    });
  }
