import * as Yup from 'yup'; 

const SCHEMA_BODY = Yup.string().matches(/^[A-Za-z0-9_-].{2,32}$/,'Must be from 3 to 30 Characters'); 

 export  const SCHEMA = Yup.object({
  BODY : SCHEMA_BODY,
});

