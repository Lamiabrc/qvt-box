
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface NotesSectionProps {
  notes: string;
  setNotes: (value: string) => void;
}

const NotesSection = ({ notes, setNotes }: NotesSectionProps) => {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-gray-800">Notes personnelles</CardTitle>
        <CardDescription>Veux-tu ajouter quelque chose sur ta journée ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Écris ici tout ce que tu as envie de partager..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px]"
        />
      </CardContent>
    </Card>
  );
};

export default NotesSection;
