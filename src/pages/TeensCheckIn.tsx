
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Brain, Zap, Users, BookOpen, Moon, Smile, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensCheckIn = () => {
  const [mood, setMood] = useState([5]);
  const [energy, setEnergy] = useState([5]);
  const [stress, setStress] = useState([5]);
  const [bodyImage, setBodyImage] = useState([5]);
  const [relationships, setRelationships] = useState([5]);
  const [intimacy, setIntimacy] = useState([5]);
  const [notes, setNotes] = useState('');

  const getMoodEmoji = (value: number) => {
    if (value <= 2) return '😢';
    if (value <= 4) return '😕';
    if (value <= 6) return '😐';
    if (value <= 8) return '🙂';
    return '😄';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-100 text-pink-800">Check-in Personnel</Badge>
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            <Heart className="w-12 h-12 inline-block mr-4" />
            Comment tu te sens aujourd'hui ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prends un moment pour toi et partage ce que tu ressens. Ton bien-être compte.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Humeur générale */}
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center text-pink-800">
                <Smile className="w-6 h-6 mr-3" />
                Mon humeur du jour {getMoodEmoji(mood[0])}
              </CardTitle>
              <CardDescription>Sur une échelle de 1 à 10, comment tu te sens ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={mood}
                onValueChange={setMood}
                max={10}
                min={1}
                step={1}
                className="mb-4"
              />
              <div className="text-center text-lg font-semibold text-pink-700">
                {mood[0]}/10
              </div>
            </CardContent>
          </Card>

          {/* Niveau d'énergie */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <Zap className="w-6 h-6 mr-3" />
                Mon niveau d'énergie
              </CardTitle>
              <CardDescription>As-tu assez d'énergie pour tes activités ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={energy}
                onValueChange={setEnergy}
                max={10}
                min={1}
                step={1}
                className="mb-4"
              />
              <div className="text-center text-lg font-semibold text-orange-700">
                {energy[0]}/10
              </div>
            </CardContent>
          </Card>

          {/* Niveau de stress */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <AlertTriangle className="w-6 h-6 mr-3" />
                Mon niveau de stress
              </CardTitle>
              <CardDescription>Te sens-tu stressé(e) ou anxieux/se ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={stress}
                onValueChange={setStress}
                max={10}
                min={1}
                step={1}
                className="mb-4"
              />
              <div className="text-center text-lg font-semibold text-red-700">
                {stress[0]}/10
              </div>
            </CardContent>
          </Card>

          {/* Image corporelle */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-800">
                <Heart className="w-6 h-6 mr-3" />
                Comment je me sens dans mon corps
              </CardTitle>
              <CardDescription>Es-tu à l'aise avec ton corps et ton image ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={bodyImage}
                onValueChange={setBodyImage}
                max={10}
                min={1}
                step={1}
                className="mb-4"
              />
              <div className="text-center text-lg font-semibold text-purple-700">
                {bodyImage[0]}/10
              </div>
            </CardContent>
          </Card>

          {/* Relations et vie sociale */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Users className="w-6 h-6 mr-3" />
                Mes relations et ma vie sociale
              </CardTitle>
              <CardDescription>Comment ça se passe avec tes amis, ta famille ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={relationships}
                onValueChange={setRelationships}
                max={10}
                min={1}
                step={1}
                className="mb-4"
              />
              <div className="text-center text-lg font-semibold text-blue-700">
                {relationships[0]}/10
              </div>
            </CardContent>
          </Card>

          {/* Intimité et sexualité */}
          <Card className="border-rose-200">
            <CardHeader>
              <CardTitle className="flex items-center text-rose-800">
                <Heart className="w-6 h-6 mr-3" />
                Mon rapport à l'intimité
              </CardTitle>
              <CardDescription>
                Tes questions sur l'intimité, la sexualité (en toute confidentialité)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={intimacy}
                onValueChange={setIntimacy}
                max={10}
                min={1}
                step={1}
                className="mb-4"
              />
              <div className="text-center text-lg font-semibold text-rose-700">
                {intimacy[0]}/10 - Je me sens à l'aise avec ces sujets
              </div>
            </CardContent>
          </Card>

          {/* Notes personnelles */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <BookOpen className="w-6 h-6 mr-3" />
                Mes pensées du jour
              </CardTitle>
              <CardDescription>
                Écris ce que tu veux partager, tes questions, tes préoccupations...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Aujourd'hui je me sens... J'ai envie de... Ce qui me préoccupe c'est..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
              Enregistrer mon check-in
            </Button>
            <Link to="/teens-home">
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensCheckIn;
