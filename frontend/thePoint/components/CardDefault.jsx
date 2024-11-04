import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault({sessionNumber, session_description,session_date}) {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Session {sessionNumber}
          </Typography>
          <Typography>
          Description: <br />
          {session_description} <br />
          Date: <br />
          {session_date}
          </Typography>
        </CardBody>
      </Card>     
    );
  }