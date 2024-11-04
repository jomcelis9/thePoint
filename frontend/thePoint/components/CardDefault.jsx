import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
 
export function CardDefault({ sessionNumber, session_description, session_date, session_title }) {
  // Truncate session description to 100 characters
  const truncatedDescription = session_description.length > 100 
      ? session_description.substring(0, 100) + "..." 
      : session_description

  return (
      <Card className="mt-4 w-64 max-h-80	min-h-80 cursor-pointer	">
          <CardHeader color="blue-gray" className="relative h-56">
          </CardHeader>
          <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                  Session {sessionNumber}
              </Typography>

              <Typography color="blue-gray" className="font-medium mb-1">
                  Title: {session_title}
              </Typography>

              <Typography>
                  Description: <br />
                  {truncatedDescription} <br />
                  Date: <br />
                  {session_date}
              </Typography>
          </CardBody>
      </Card>     
  );
}
