/* ================================================================
   BANCO DE PREGUNTAS — Evaluación Docente Filosofía (Chile)
   Alineado al Temario 2026 (Instrumento de Conocimientos
   Específicos y Pedagógicos — Educación Media Filosofía).

   Dominios del temario:
   D1 = Introducción a la Filosofía (reflexión y argumentación)
   D2 = Ontología
   D3 = Epistemología, Ética y Política
   D4 = Estética
   D5 = Enseñanza-Aprendizaje de la Filosofía (pedagogía)

   fuente: "2024" = pregunta real de la prueba oficial 2024 con clave
           oficial del CPEIP. "nueva" = pregunta creada para reforzar.
   ================================================================ */

window.DOMINIOS = {
  D1: "Introducción a la Filosofía",
  D2: "Ontología",
  D3: "Epistemología, Ética y Política",
  D4: "Estética",
  D5: "Enseñanza-Aprendizaje (Pedagogía)"
};

window.BANCO = [
/* ---------- PRUEBA OFICIAL 2024 (60 preguntas, clave CPEIP) ---------- */
{
  id:"2024-1", fuente:"2024", dominio:"D3", tema:"Ética contemporánea (Jonas)",
  enunciado:'Lea el siguiente texto:\n\n"Incluye en tu elección presente, como objeto también de tu querer, la futura integridad del hombre" (Jonas, 1995: 40).\n\n¿A qué postura ética se hace referencia en el enunciado anterior?',
  opciones:{A:"Al principio de responsabilidad.",B:"Al concepto de cyborg.",C:"Al relativismo moral.",D:"Al problema del mundo virtual."},
  correcta:"A",
  explicacion:"Hans Jonas formula el 'principio de responsabilidad': ante el poder de la técnica, nuestra acción presente debe incorporar como objeto la permanencia futura de la humanidad. Su imperativo es 'obra de tal modo que los efectos de tu acción sean compatibles con la permanencia de una vida humana auténtica'. El cyborg remite a Haraway; el mundo virtual no es el foco."
},
{
  id:"2024-2", fuente:"2024", dominio:"D3", tema:"Marx (materialismo histórico)",
  enunciado:"¿Cuál de las siguientes afirmaciones NO corresponde al pensamiento de Karl Marx?",
  opciones:{A:"La transformación de la sociedad es posible si la libertad se convierte en una necesidad para los seres humanos.",B:"La estructura económica de la sociedad es la base del edificio jurídico y político y a la cual corresponden determinadas formas de conciencia social.",C:"El modo de producción de la vida material es determinante para el proceso social, político e intelectual de la vida.",D:"La existencia social es determinante para el desarrollo de la conciencia de los hombres."},
  correcta:"A",
  explicacion:"B, C y D expresan la tesis marxista central: la base económica (infraestructura) determina la superestructura jurídico-política y la conciencia social ('no es la conciencia la que determina el ser, sino el ser social el que determina la conciencia'). La opción A invierte la lógica y mezcla la 'libertad como necesidad' de un modo ajeno a Marx; por eso es la que NO corresponde."
},
{
  id:"2024-3", fuente:"2024", dominio:"D3", tema:"De Beauvoir (feminismo)",
  enunciado:"De acuerdo con Simone de Beauvoir, el feminismo es una forma de vivir individualmente y de luchar colectivamente.\n\n¿Cuál de las siguientes situaciones concuerda con la premisa anterior?",
  opciones:{A:"La mujer, desde su nacimiento, tiene una determinación biológica que la hace ser lo que es.",B:"La mujer posee una esencia femenina que la caracteriza social y culturalmente.",C:"La mujer se hace y deviene a través de interacciones con los demás y consigo misma.",D:"La mujer debe educarse tal como al hombre, pues así tendrá el poder sobre sí misma."},
  correcta:"C",
  explicacion:"La tesis de De Beauvoir es 'no se nace mujer, se llega a serlo': el género es una construcción, no una esencia ni una determinación biológica. Por eso 'la mujer se hace y deviene' (C). A y B afirman esencialismo/determinismo biológico, que ella rechaza."
},
{
  id:"2024-4", fuente:"2024", dominio:"D5", tema:"Tipos de pensamiento",
  enunciado:"Un docente de tercero medio realiza una actividad diagnóstica para evaluar el nivel inicial de una habilidad. Pide a los estudiantes que, en grupos, analicen una carta al director, discutan el punto de vista y los argumentos ahí expresados y, como conclusión, indiquen si están de acuerdo o no con lo planteado.\n\n¿Qué tipo de pensamiento se está evaluando?",
  opciones:{A:"Pensamiento divergente.",B:"Pensamiento crítico.",C:"Pensamiento creativo.",D:"Pensamiento racional."},
  correcta:"B",
  explicacion:"Analizar argumentos, evaluar un punto de vista y tomar una posición fundamentada (de acuerdo/desacuerdo) es la operación propia del pensamiento crítico. El divergente/creativo apunta a generar ideas o soluciones múltiples y novedosas, no a evaluar la validez de un argumento dado."
},
{
  id:"2024-5", fuente:"2024", dominio:"D1", tema:"Orígenes del filosofar (Jaspers)",
  enunciado:"¿Cuáles son los tres elementos que el filósofo alemán Karl Jaspers distingue como los orígenes de la filosofía?",
  opciones:{A:"La razón, la intuición y la curiosidad.",B:"El conocimiento, la causalidad y la casualidad.",C:"El asombro, la duda y las situaciones límites.",D:"La certeza, el examen crítico y el ser."},
  correcta:"C",
  explicacion:"Para Jaspers el filosofar nace de tres fuentes: el asombro (herencia griega, Platón/Aristóteles), la duda (herencia cartesiana) y las situaciones límite (Grenzsituationen: muerte, sufrimiento, lucha, culpa) que lo estremecen a uno y lo conducen a la pregunta."
},
{
  id:"2024-6", fuente:"2024", dominio:"D1", tema:"Tipos de razonamiento",
  enunciado:"Dadas unas premisas específicas de tipo general o universal es posible alcanzar conclusiones de tipo particular e individual, a partir de lo que consideramos cierto a un nivel global.\n\n¿A qué tipo de razonamiento hace referencia la definición anterior?",
  opciones:{A:"Deductivo.",B:"Inductivo.",C:"Analógico.",D:"Silogístico."},
  correcta:"A",
  explicacion:"El razonamiento deductivo va de lo general/universal a lo particular: si las premisas son verdaderas, la conclusión se sigue necesariamente. El inductivo hace lo contrario (de casos particulares a generalizaciones); el analógico razona por semejanza. El silogismo es una forma de deducción, pero la definición dada describe la deducción en general."
},
{
  id:"2024-7", fuente:"2024", dominio:"D4", tema:"Estética (Aristóteles, catarsis)",
  enunciado:"A partir de lo establecido por Aristóteles en la Poética, ¿qué expresión artística permite lograr la purificación emocional, corporal, mental y espiritual, mediante la experiencia de la piedad y el temor?",
  opciones:{A:"La pintura.",B:"El teatro.",C:"La escultura.",D:"La música."},
  correcta:"B",
  explicacion:"En la Poética, Aristóteles analiza la tragedia (teatro) y sostiene que, mediante la piedad (eleos) y el temor (phobos) que despierta en el espectador, produce la catarsis o purificación de esas emociones."
},
{
  id:"2024-8", fuente:"2024", dominio:"D4", tema:"Análisis de obra (Guernica)",
  enunciado:"Observe la obra Guernica de Pablo Picasso (1937).\n\n¿Cuál de los siguientes elementos resalta el mensaje que el autor quiere transmitir con esta pintura?",
  opciones:{A:"El soporte de la obra.",B:"El orden de los personajes.",C:"La iconografía utilizada.",D:"La textura de la obra."},
  correcta:"C",
  explicacion:"El sentido del Guernica (denuncia del horror del bombardeo) se transmite por su iconografía: el toro, el caballo herido, la madre con el hijo muerto, la lámpara, el guerrero fragmentado. Son los símbolos (iconografía) los que portan el mensaje, más que el soporte o la textura."
},
{
  id:"2024-9", fuente:"2024", dominio:"D1", tema:"Diálogo filosófico",
  enunciado:"Un tercero medio trabaja el OA 'Dialogar sobre grandes problemas de la ontología y/o epistemología, confrontando diversas perspectivas filosóficas'. Aparecen conceptos contradictorios y el docente debe aclarar las características de un diálogo filosófico.\n\n¿Qué opción presenta una explicación que ayuda a comprender las características de un diálogo filosófico?",
  opciones:{A:"Corresponde a una discusión estructurada con réplicas por parte de un equipo defensor y otro en contra de la afirmación planteada.",B:"Considera un tema interesante y amplio, para cuyo desarrollo se designa a un moderador y se establecen reglas y agenda.",C:"Corresponde a una instancia en la que los participantes se informan sobre un tema o problema y plantean propuestas de solución.",D:"Considera el desarrollo del razonamiento entre los participantes, demandando explicaciones, aclaraciones conceptuales y argumentos de las opiniones dadas."},
  correcta:"D",
  explicacion:"El diálogo filosófico (en la línea socrática) no busca 'ganar' (eso sería un debate, opción A) ni solo informar (C) u organizar un foro (B), sino construir razonamiento colaborativo: pedir aclaraciones conceptuales, pruebas y argumentos de cada opinión. Por eso D."
},
{
  id:"2024-10", fuente:"2024", dominio:"D5", tema:"Instrumentos de evaluación",
  enunciado:"En un cuarto medio se desarrolla un OA mediante una mesa redonda sobre el uso de la inteligencia artificial en trabajos de investigación.\n\n¿Qué instrumento permite al docente evaluar y CALIFICAR el desempeño de los estudiantes en esta actividad?",
  opciones:{A:"Rúbrica analítica.",B:"Bitácora.",C:"Registro anecdótico.",D:"Lista de cotejo."},
  correcta:"A",
  explicacion:"Para calificar un desempeño con distintos niveles de logro en varios criterios (argumentación, uso de fuentes, participación) se requiere una rúbrica analítica, que describe niveles por criterio. La lista de cotejo solo registra presencia/ausencia (logrado/no logrado); la bitácora y el registro anecdótico son instrumentos de recolección cualitativa, no de calificación con niveles."
},
{
  id:"2024-11", fuente:"2024", dominio:"D5", tema:"Estrategias de enseñanza",
  enunciado:"Un tercero medio trabaja el OA 'Aplicar principios y herramientas elementales de argumentación… la identificación de razonamientos válidos e inválidos y métodos de razonamiento filosófico'. La docente busca una actividad ORAL que integre esas habilidades.\n\n¿Cuál de las siguientes actividades permite cumplir el propósito?",
  opciones:{A:"Mesa redonda.",B:"Debate.",C:"Cabildo abierto.",D:"Disertación."},
  correcta:"B",
  explicacion:"El debate exige construir argumentos, anticipar y refutar objeciones y distinguir razonamientos válidos de inválidos en tiempo real: integra de forma oral todas las habilidades argumentativas del OA. La disertación es expositiva (una sola voz), la mesa redonda es más informativa y el cabildo es deliberación ciudadana."
},
{
  id:"2024-12", fuente:"2024", dominio:"D3", tema:"Ética medioambiental",
  enunciado:"Lea la siguiente definición:\n\nCorriente filosófica que aborda los dilemas éticos que surgen de las relaciones entre los seres humanos y su entorno no humano.\n\n¿A qué concepto corresponde la definición anterior?",
  opciones:{A:"Ética del medio ambiente.",B:"Ética del doble efecto.",C:"Ética del reconocimiento.",D:"Ética del cuidado."},
  correcta:"A",
  explicacion:"La ética medioambiental (o ambiental) estudia los deberes del ser humano respecto de la naturaleza y el entorno no humano. El doble efecto es un principio de la acción con consecuencias previsibles no buscadas; la ética del cuidado (Gilligan) atiende a vínculos y responsabilidad hacia los demás."
},
{
  id:"2024-13", fuente:"2024", dominio:"D3", tema:"Libertad y responsabilidad (Jonas/Sartre)",
  enunciado:"Una de las ideas importantes de la ética de Hans Jonas dice relación con que solo los humanos pueden escoger consciente y deliberadamente entre alternativas de acción, y esa elección tiene consecuencias.\n\n¿Con cuál de los siguientes filósofos se relaciona la premisa anterior?",
  opciones:{A:"Michel Foucault.",B:"Jean Paul Sartre.",C:"John Locke.",D:"Arthur Schopenhauer."},
  correcta:"B",
  explicacion:"La idea de que el ser humano elige libre y conscientemente, y es responsable de las consecuencias, conecta con el existencialismo de Sartre: 'estamos condenados a ser libres' y somos responsables de lo que hacemos de nosotros mismos."
},
{
  id:"2024-14", fuente:"2024", dominio:"D5", tema:"Aprendizaje a partir del error",
  enunciado:"Un docente trabaja un OA que pide identificar premisas y conclusiones en argumentos. Los estudiantes manifiestan dificultad para diferenciar premisas de conclusión y solo un pequeño grupo pudo entregar.\n\n¿Qué acción es pertinente para solucionar el problema?",
  opciones:{A:"Definir nuevamente qué es una premisa y una conclusión, mostrando los ejemplos vistos en clases. A partir de ello, pedirles que trabajen en el primer texto identificando ambos elementos.",B:"Pedir a los estudiantes que busquen en el texto las evidencias que se aportan para el argumento, señalando que corresponden a las premisas. A partir de ello, en conjunto se llega a la conclusión.",C:"Leer el texto de forma grupal, haciendo énfasis en los argumentos de cada uno para que sean evidentes para todos. A partir de ello, pedir que identifiquen la conclusión y premisas.",D:"Pedir a algún estudiante que lea sus respuestas al curso y comente cómo identificó la premisa y la conclusión. A partir de ello, pedir al resto terminar el trabajo siguiendo el ejemplo."},
  correcta:"A",
  explicacion:"Como el error es conceptual (no distinguen qué es premisa y qué es conclusión), la acción pedagógica pertinente parte por re-enseñar el concepto con ejemplos y luego aplicar guiadamente en el primer texto. Las demás opciones asumen que ya dominan la distinción (buscar evidencias, deducir conclusión, imitar a un compañero), sin reparar el vacío conceptual de base."
},
{
  id:"2024-15", fuente:"2024", dominio:"D1", tema:"Métodos filosóficos (fenomenología)",
  enunciado:"Es el método que trata de descubrir las estructuras esenciales de la conciencia y se caracteriza por ir en búsqueda de experiencias originarias y exponerlas en su contexto, considerando un mundo exterior que da sentido a la experiencia y un mundo interior que da cuenta de cómo es percibida.\n\n¿A qué método filosófico corresponde la definición?",
  opciones:{A:"Fenomenológico.",B:"Hermenéutico.",C:"Trascendental.",D:"Analítico."},
  correcta:"A",
  explicacion:"El método fenomenológico (Husserl) busca describir las estructuras esenciales de la conciencia tal como se dan a ella ('a las cosas mismas'), atendiendo a la experiencia vivida. La hermenéutica interpreta textos/sentido; el trascendental (Kant) indaga las condiciones de posibilidad del conocimiento; el analítico examina el lenguaje y los conceptos."
},
{
  id:"2024-16", fuente:"2024", dominio:"D1", tema:"Validez y verdad",
  enunciado:"¿Qué afirmación es correcta respecto del razonamiento?",
  opciones:{A:"Es válido si su conclusión es verdadera.",B:"Es inválido si su conclusión es inválida.",C:"Puede ser válido, aunque su conclusión sea falsa.",D:"Puede ser inválido, aunque su conclusión sea válida."},
  correcta:"C",
  explicacion:"La validez es una propiedad de la forma del argumento (si las premisas fueran verdaderas, la conclusión se seguiría), no de la verdad de la conclusión. Un argumento puede ser válido con conclusión falsa (si parte de premisas falsas). Nota: 'válido/inválido' se predica de argumentos, no de conclusiones (las conclusiones son verdaderas o falsas), lo que descarta B y D."
},
{
  id:"2024-17", fuente:"2024", dominio:"D5", tema:"Validez vs verdad (estrategia)",
  enunciado:"Una docente trabaja el OA sobre razonamientos válidos e inválidos. A los estudiantes les cuesta distinguir entre enunciados válidos y enunciados verdaderos.\n\n¿Qué estrategia debe aplicar la docente para ayudarlos a reconocer la diferencia?",
  opciones:{A:"Cambiar el enfoque hacia la elaboración de discursos públicos.",B:"Mostrar el ejemplo de un enunciado que sea válido, pero no verdadero, así como también un enunciado que sea verdadero, pero no válido.",C:"Copiar en sus cuadernos los ejemplos del texto del estudiante.",D:"Recordar las definiciones de validez y verdad con una presentación con nuevos ejemplos."},
  correcta:"B",
  explicacion:"La forma más efectiva de que comprendan que validez y verdad son independientes es el contraste con casos: un argumento válido con conclusión falsa y otro con conclusión verdadera pero forma inválida. Eso hace visible que ambas propiedades no coinciden necesariamente. Repetir definiciones (D) o copiar (C) no logra esa comprensión relacional."
},
{
  id:"2024-18", fuente:"2024", dominio:"D3", tema:"Doble efecto (Philippa Foot)",
  enunciado:"El desafío de los dilemas éticos es plantear problemas… En todos esos casos existe un doble efecto: uno que se busca y otro que puede preverse, pero que no es deliberadamente buscado.\n\n¿A qué filósofa se asocia el principio del doble efecto?",
  opciones:{A:"Victoria Camps.",B:"Carol Gilligan.",C:"Philippa Foot.",D:"Ayn Rand."},
  correcta:"C",
  explicacion:"Philippa Foot es célebre por su tratamiento del principio del doble efecto y por el 'problema del tranvía', que distingue entre el efecto buscado y el efecto previsto pero no intencionado de una acción."
},
{
  id:"2024-19", fuente:"2024", dominio:"D1", tema:"Ramas de la filosofía (existencialismo)",
  enunciado:"Entendiendo al existencialismo como una corriente orientada al análisis de la condición humana, la libertad y la responsabilidad individual…\n\n¿Cuál de las siguientes preguntas refleja la anterior definición?",
  opciones:{A:"¿Qué es lo bueno?",B:"¿La vida tiene sentido?",C:"¿Qué es lo real?",D:"¿Existe el alma?"},
  correcta:"B",
  explicacion:"El existencialismo gira en torno al sentido de la existencia humana, la libertad y la angustia: la pregunta '¿la vida tiene sentido?' es su pregunta característica. '¿Qué es lo bueno?' es ética; '¿qué es lo real?' es ontología/metafísica; '¿existe el alma?' es metafísica."
},
{
  id:"2024-20", fuente:"2024", dominio:"D1", tema:"Herramientas argumentativas (descripción)",
  enunciado:"Lea la siguiente definición:\n\nEs una herramienta discursiva que permite exponer las características de los sujetos, de los acontecimientos, de los espacios físicos donde se desarrollan, incluso de las sensaciones, tanto en situaciones reales o en textos de ficción.\n\n¿A qué herramienta argumentativa se hace referencia?",
  opciones:{A:"Explicación.",B:"Definición.",C:"Descripción.",D:"Comprensión."},
  correcta:"C",
  explicacion:"Describir es exponer las características, rasgos y cualidades de algo (sujetos, hechos, espacios, sensaciones). Explicar busca las causas o el porqué; definir fija el significado preciso de un concepto; comprender es captar el sentido."
},
{
  id:"2024-21", fuente:"2024", dominio:"D3", tema:"Epistemología Platón/Aristóteles",
  enunciado:"¿Cuál es la diferencia epistemológica que existe entre Platón y Aristóteles?",
  opciones:{A:"Para el primero, el conocimiento y la ciencia se adquieren a través de los sentidos y la razón; para el segundo, se adquieren a través de los sentidos.",B:"Para el primero, el conocimiento y la ciencia se adquieren a través de la razón; para el segundo, se adquiere a través de la experimentación del mundo natural.",C:"Para el primero, el conocimiento y la ciencia se adquieren a través de la razón; para el segundo, se adquieren a través de la reminiscencia.",D:"Para el primero, el conocimiento y la ciencia se adquieren a través de la intuición sensible; para el segundo, se adquieren a través de la intuición racional."},
  correcta:"B",
  explicacion:"Platón es racionalista: el verdadero conocimiento (epistéme) es de las Ideas y se alcanza por la razón (los sentidos solo dan opinión, dóxa). Aristóteles valora la experiencia: el conocimiento parte de la percepción del mundo natural y, por abstracción, llega a lo universal. La reminiscencia (anámnesis) es de Platón, no de Aristóteles (descarta C)."
},
{
  id:"2024-22", fuente:"2024", dominio:"D3", tema:"Escepticismo",
  enunciado:"Una categoría epistemológica cuestiona la posibilidad de alcanzar un conocimiento verdadero y absoluto, y pone en duda la certeza de nuestras creencias. Filósofos como Pirrón de Elis y David Hume han desarrollado argumentos en esta categoría.\n\n¿Qué categoría es descrita?",
  opciones:{A:"Escepticismo.",B:"Pragmatismo.",C:"Racionalismo.",D:"Idealismo."},
  correcta:"A",
  explicacion:"El escepticismo pone en duda la posibilidad de un conocimiento cierto y absoluto. Pirrón de Elis es el fundador del escepticismo antiguo; Hume es un escéptico moderno respecto de la causalidad y la inducción. El racionalismo y el idealismo, por el contrario, afirman la posibilidad del conocimiento."
},
{
  id:"2024-23", fuente:"2024", dominio:"D3", tema:"Virtudes platónicas",
  enunciado:"En su texto La República, Platón establece cuatro virtudes principales.\n\n¿Cuál de las siguientes virtudes NO corresponde al canon platónico?",
  opciones:{A:"La prudencia.",B:"La sabiduría.",C:"La templanza.",D:"La justicia."},
  correcta:"B",
  explicacion:"Clave oficial: B. En La República, Platón asocia a cada parte del alma y a cada clase social una virtud: prudencia/sabiduría (racional-gobernantes), fortaleza o valentía (irascible-guardianes), templanza (concupiscible-productores) y justicia (armonía del conjunto). ⚠️ Nota: la virtud ausente es propiamente la 'fortaleza/valentía'; la clave considera que 'sabiduría' es la que no figura en el listado buscado (tratando prudencia y sabiduría como términos distintos). Estudia las cuatro: sabiduría, fortaleza, templanza y justicia."
},
{
  id:"2024-24", fuente:"2024", dominio:"D5", tema:"Recursos didácticos",
  enunciado:"Un docente trabajará el OA 'Evaluar el impacto de ideas filosóficas relacionadas con la ontología, la epistemología y la ética en cuestiones actuales…' mediante un ensayo. En la actividad inicial pide dar un ejemplo de un tema posible y, a partir de él, identificar una problemática filosófica actual y significativa.\n\n¿Cuál de los siguientes recursos sería pertinente para la actividad INICIAL?",
  opciones:{A:"Extractos de textos de filosofía del arte, de ontología, epistemología y ética considerados clásicos.",B:"Mapa conceptual que caracterice la diferencia entre política, ontología, epistemología y ética.",C:"Cuadro comparativo sobre los principales temas abordados en filosofía política, ética, estética, ontología y epistemología.",D:"Película o cortometraje actual, en la que se aborden temas medioambientales o de ciencia ficción."},
  correcta:"D",
  explicacion:"La actividad inicial busca motivar y conectar con problemáticas ACTUALES y significativas para los estudiantes. Un recurso audiovisual contemporáneo (cine/cortometraje sobre medioambiente o ciencia ficción) activa el interés y permite detectar dilemas filosóficos vivos. Los textos clásicos, mapas y cuadros son adecuados para el desarrollo conceptual, no para la activación inicial."
},
{
  id:"2024-25", fuente:"2024", dominio:"D3", tema:"Hegemonía cultural (Gramsci)",
  enunciado:"El concepto de hegemonía cultural, propuesto por este filósofo, se refiere a las normas culturales vigentes que son impuestas por una clase específica; por eso no deberían percibirse como naturales o inevitables, sino como una construcción social artificial e instrumento de dominación.\n\n¿Con qué filósofo se relaciona el concepto?",
  opciones:{A:"Karl Marx.",B:"Antonio Gramsci.",C:"Georg Lukács.",D:"Louis Althusser."},
  correcta:"B",
  explicacion:"La 'hegemonía cultural' es un concepto central de Antonio Gramsci: la clase dominante mantiene su poder no solo por la fuerza, sino logrando que sus valores y normas sean aceptados como 'sentido común' natural por el resto de la sociedad."
},
{
  id:"2024-26", fuente:"2024", dominio:"D5", tema:"Conocimientos previos",
  enunciado:"Un cuarto medio trabaja el OA 'Dialogar sobre problemas contemporáneos de la ética y la política…'. La actividad busca un análisis entre ética y política a partir de las formas de participación y el fenómeno de baja participación electoral.\n\n¿Qué conocimientos previos deberían poseer los estudiantes para realizar dicho análisis?",
  opciones:{A:"Los conceptos de democracia, ética y moral.",B:"Las características de la política en Chile.",C:"La idea de pluralismo moral.",D:"La diferencia entre ética heterónoma y autónoma."},
  correcta:"A",
  explicacion:"Para analizar la relación ética-política en torno a la participación electoral, los estudiantes requieren manejar los conceptos base más amplios y transversales: democracia, ética y moral. Las otras opciones son conocimientos más específicos o parciales que no bastan como base para todo el análisis solicitado."
},
{
  id:"2024-27", fuente:"2024", dominio:"D3", tema:"Marx (trabajo y alienación)",
  enunciado:"Para Karl Marx el trabajo es una condición necesaria tanto para la humanización como para la deshumanización del ser humano.\n\n¿Qué situación podría reflejar el impacto de los procesos asociados al trabajo en la sociedad contemporánea?",
  opciones:{A:"La estratificación del trabajo de las sociedades actuales.",B:"El extrañamiento de parte del trabajador con respecto a su trabajo.",C:"La excesiva cantidad de horas semanales de trabajo en las sociedades actuales.",D:"La inserción de elementos tecnológicos en gran parte de las empresas."},
  correcta:"B",
  explicacion:"La 'deshumanización' en Marx es la alienación o extrañamiento (Entfremdung): el trabajador no se reconoce en el producto de su trabajo ni en la actividad misma, que se le vuelven ajenos y hostiles. Las demás son fenómenos laborales, pero no nombran el concepto filosófico específico de deshumanización marxista."
},
{
  id:"2024-28", fuente:"2024", dominio:"D4", tema:"Estética (Benjamin, aura)",
  enunciado:"Según Walter Benjamin, el arte ha perdido su aura en la época de la reproductividad técnica, dando paso a lo repetido y desapareciendo la experiencia de lo único, de lo original. Así, el valor ritual o tradicional del arte desaparece como tal.\n\nA partir de esto, ¿qué otro valor del arte surge?",
  opciones:{A:"El arte como función social.",B:"El arte como valor cultural.",C:"El arte como expresividad.",D:"El arte como práctica política."},
  correcta:"D",
  explicacion:"Para Benjamin, al perderse el 'aura' y el valor ritual, el arte reproducible técnicamente se funda en un valor exhibitivo que lo abre a la masa y lo politiza: el arte adquiere una función política (frente a la 'estetización de la política' del fascismo, propone la 'politización del arte')."
},
{
  id:"2024-29", fuente:"2024", dominio:"D1", tema:"Tipos de inferencia",
  enunciado:"Lea el siguiente razonamiento:\n\nTodo animal respira.\nTodo ser humano es animal.\nLuego, todo ser humano respira.\n\n¿Qué tipo de inferencia es la presentada en el enunciado?",
  opciones:{A:"Inferencia lógica.",B:"Inferencia hipotética.",C:"Inferencia inductiva.",D:"Inferencia deductiva."},
  correcta:"C",
  explicacion:"Clave oficial: C. ⚠️ Nota importante para tu estudio: formalmente este razonamiento es un silogismo categórico (modo Barbara) y, por tanto, DEDUCTIVO: de dos premisas universales se sigue necesariamente la conclusión. La clave oficial marca 'inductiva', lo que la mayoría de los especialistas consideraría un error. Para la prueba, memoriza la respuesta oficial (C), pero ten claro que la estructura es deductiva."
},
{
  id:"2024-30", fuente:"2024", dominio:"D1", tema:"Métodos filosóficos (analítico)",
  enunciado:"Este método consiste en revisar exhaustivamente los conceptos que subyacen a los problemas centrales de la Filosofía, a partir de una reflexión objetiva y racional, sistemática y rigurosa, considerando contexto, condiciones concretas, problemas y aplicación de conceptos.\n\n¿A cuál método corresponde la definición anterior?",
  opciones:{A:"Hermenéutico.",B:"Trascendental.",C:"Dialéctico.",D:"Analítico."},
  correcta:"D",
  explicacion:"El método analítico descompone y examina rigurosamente los conceptos que subyacen a los problemas filosóficos, buscando claridad conceptual y precisión lógico-lingüística. La hermenéutica interpreta sentido en contexto; el trascendental busca condiciones de posibilidad; el dialéctico procede por tesis-antítesis-síntesis."
},
{
  id:"2024-31", fuente:"2024", dominio:"D3", tema:"Biopolítica (Foucault)",
  enunciado:"Considerando la tesis de Michel Foucault sobre la biopolítica, ¿cuál de las siguientes opciones representa dicho concepto?",
  opciones:{A:"Las prácticas de los Estados modernos para subyugar los cuerpos y controlar la población mediante numerosas y diversas técnicas.",B:"La relación entre sujetos que de algún modo emplean técnicas de amaestramiento, procedimientos de dominación y sistemas para obtener la obediencia.",C:"La capacidad de un individuo, que tenga relaciones de sujeción, para influir en el comportamiento de otras personas u organizaciones sociales.",D:"El conjunto de cálculos y tácticas que intervienen sobre una población mediante la gestión de la vida."},
  correcta:"D",
  explicacion:"La biopolítica foucaultiana es el poder que toma como objeto a la POBLACIÓN y a la VIDA (natalidad, salud, mortalidad), gestionándola mediante cálculos y tácticas ('hacer vivir'). La opción A describe más bien el poder disciplinario sobre los cuerpos individuales; D captura la noción específica de biopolítica (gestión de la vida de la población)."
},
{
  id:"2024-32", fuente:"2024", dominio:"D5", tema:"Actividad y habilidades (indagación/creatividad)",
  enunciado:"En la primera unidad de tercero medio se trabaja el OA 'Describir las características del quehacer filosófico, considerando el problema de su origen y sentido, e identificando algunas de sus grandes preguntas y temas'. La docente espera una actividad en la que los estudiantes tomen un rol activo, centrándose en habilidades de indagación y creatividad.\n\n¿Qué actividad permite lograr el propósito?",
  opciones:{A:"Debate grupal en el que los equipos se dividen entre la utilidad-inutilidad de la filosofía.",B:"Lectura de textos respecto a cómo reconocer el trabajo filosófico en contraposición a otros tipos de estudio.",C:"Infografía respecto al nacimiento de la filosofía y cómo cambia hasta lo que estudiamos en la actualidad.",D:"Mapa cognitivo de ciclos en el que se consideren las grandes ramas temáticas que ha tenido la filosofía."},
  correcta:"C",
  explicacion:"Elaborar una infografía exige indagar (buscar y seleccionar información sobre el origen y evolución de la filosofía) y crear (diseñar una representación visual propia): combina rol activo, indagación y creatividad. La lectura y el debate trabajan otras habilidades; el mapa de ciclos es más de organización que de creación/indagación."
},
{
  id:"2024-33", fuente:"2024", dominio:"D5", tema:"Objeto de estudio y finalidad",
  enunciado:"En la unidad 'La filosofía nos permite cuestionar la realidad y a nosotros mismos', la docente pide un cuadro comparativo entre la filosofía y otras disciplinas, considerando objeto de estudio y finalidad. Los estudiantes piden aclarar la diferencia entre objeto de estudio y finalidad.\n\n¿Qué respuesta es apropiada por parte de la docente?",
  opciones:{A:"El objeto de estudio tiene relación con los pasos a seguir para recoger información respecto al tema. La finalidad es el cómo se muestran los resultados.",B:"El objeto de estudio tiene relación con el contraste de los preconceptos con la evidencia. La finalidad se refiere a la respuesta a la que esperamos llegar.",C:"El objeto de estudio se refiere al hecho, producto o situación que se buscará conocer. La finalidad es por qué esta disciplina busca información de aquel objeto.",D:"El objeto de estudio se refiere a las herramientas que tenemos para alcanzar el conocimiento. La finalidad son las preguntas a las que se le encuentra respuesta en esta disciplina."},
  correcta:"C",
  explicacion:"El objeto de estudio es aquello que la disciplina busca conocer (el 'qué'); la finalidad es el propósito o el 'para qué/por qué' se estudia ese objeto. La opción C define correctamente ambos. Las demás confunden objeto/finalidad con método (pasos, herramientas) o con resultados."
},
{
  id:"2024-34", fuente:"2024", dominio:"D5", tema:"Diseño de actividad (preguntas significativas)",
  enunciado:"OA de tercero medio: 'Formular preguntas significativas para su vida a partir del análisis de conceptos y teorías filosóficas, poniendo en duda aquello que aparece como \"cierto\" o \"dado\" y proyectando diversas respuestas posibles'. El docente quiere que los estudiantes lo desarrollen de forma individual y compartan sus respuestas.\n\n¿Cuál de las siguientes actividades permite desarrollar este objetivo?",
  opciones:{A:"Investigar qué diferencia una pregunta filosófica de otro tipo de preguntas.",B:"Exponer ejemplos de respuestas a preguntas filosóficas personales.",C:"Elaborar un afiche sobre las características de una pregunta filosófica.",D:"Crear una línea de tiempo sobre las preguntas filosóficas a través de la historia."},
  correcta:"B",
  explicacion:"El OA pide que cada estudiante FORMULE preguntas significativas para su vida y PROYECTE diversas respuestas posibles, compartiéndolas. Exponer ejemplos de respuestas a preguntas filosóficas personales (B) es lo que mejor ejercita ese acto de preguntar y proyectar respuestas propias. Las otras describen la pregunta filosófica (A, C) o la historizan (D), sin que el estudiante formule las suyas."
},
{
  id:"2024-35", fuente:"2024", dominio:"D1", tema:"Método hermenéutico",
  enunciado:"¿Qué caracteriza el aporte del método hermenéutico al desarrollo del conocimiento?",
  opciones:{A:"Se centra en el acceso al conocimiento a partir del análisis del lenguaje y los conceptos.",B:"Se centra en el diálogo como herramienta para acceder al conocimiento.",C:"Se centra en el sujeto que conoce y en el objeto del conocimiento.",D:"Se centra en la interpretación de textos, considerando su contexto."},
  correcta:"D",
  explicacion:"La hermenéutica (Gadamer, Ricoeur) es el arte/método de la interpretación: comprende textos y fenómenos atendiendo a su contexto histórico y al 'círculo' entre las partes y el todo. La opción A describe el método analítico; el diálogo (B) remite a la mayéutica."
},
{
  id:"2024-36", fuente:"2024", dominio:"D3", tema:"Demarcación (Popper)",
  enunciado:"El problema de la demarcación, para Karl Popper, puede definirse como el de encontrar un criterio mediante el cual podamos distinguir entre aserciones que pertenecen a las ciencias empíricas y las que podríamos llamar metafísicas.\n\n¿Cuál es el criterio de demarcación que postula Popper?",
  opciones:{A:"El programa de investigación.",B:"El sentido/significatividad.",C:"La falsación.",D:"El falibilismo."},
  correcta:"C",
  explicacion:"Para Popper, lo que distingue a la ciencia empírica es la falsabilidad: una teoría es científica si es refutable por la experiencia (puede especificar qué hechos la contradirían). El 'programa de investigación' es de Lakatos; el criterio de sentido/significatividad es del positivismo lógico; el falibilismo es una tesis general, no el criterio de demarcación."
},
{
  id:"2024-37", fuente:"2024", dominio:"D5", tema:"Pensamiento crítico (fuentes confiables)",
  enunciado:"La docente pide a los estudiantes investigar sobre conceptos como justicia y libertad, desarrollando el pensamiento crítico mediante la evaluación y selección de fuentes confiables.\n\n¿Cuál de las siguientes actividades permitiría desarrollar este tipo de pensamiento?",
  opciones:{A:"Modelar el uso de Google Académico® e indicar que descarguen desde ahí sus fuentes.",B:"Comparar la información que entrega un libro frente a un artículo, demostrando que la complejidad del libro permite que sea confiable.",C:"Pedir al estudiantado compilar las fuentes y razones que les hacen creer que los medios de información seleccionados son confiables.",D:"Indicar las fuentes que deben evitar, ya que no son confiables (redes sociales, Wikipedia®, etc.)."},
  correcta:"C",
  explicacion:"Desarrollar pensamiento crítico implica que los propios estudiantes EVALÚEN y JUSTIFIQUEN la confiabilidad de sus fuentes con razones. Pedirles compilar fuentes y argumentar por qué son confiables (C) ejercita ese juicio. Las demás imponen criterios externos (una herramienta, una regla 'libro = confiable', una lista de prohibidos) sin que el estudiante razone."
},
{
  id:"2024-38", fuente:"2024", dominio:"D3", tema:"Empirismo y racionalismo",
  enunciado:"La búsqueda del origen del conocimiento podría resumirse en la constante oposición que han desarrollado los filósofos, dependiendo de si consideran que aquel radica exclusivamente en la experiencia de los hechos o, por el contrario, si debe ceñirse únicamente a la razón.\n\n¿A qué corrientes filosóficas corresponden las ideas anteriores?",
  opciones:{A:"Nominalismo y Universalismo.",B:"Realismo e Idealismo.",C:"Fisicalismo e Inmaterialismo.",D:"Empirismo y Racionalismo."},
  correcta:"D",
  explicacion:"El debate sobre el origen del conocimiento opone al empirismo (el conocimiento proviene de la experiencia sensible: Locke, Hume) con el racionalismo (la razón es la fuente del conocimiento verdadero: Descartes, Leibniz). Las otras parejas abordan problemas distintos (universales, realidad externa, materialidad)."
},
{
  id:"2024-39", fuente:"2024", dominio:"D3", tema:"Platón (doctrina del Estado)",
  enunciado:"En el ámbito político, Platón desarrolló una doctrina del Estado.\n\n¿Qué permite el funcionamiento de dicha doctrina?",
  opciones:{A:"La Estética.",B:"La Moral.",C:"La Ética.",D:"La Epistemología."},
  correcta:"C",
  explicacion:"En La República, el Estado justo funciona cuando cada clase cumple su virtud y hay armonía entre las partes del alma y de la ciudad: es la justicia como virtud ética la que ordena y hace funcionar el Estado ideal platónico. El Estado es, para Platón, el alma 'en grande', gobernada por la ética."
},
{
  id:"2024-40", fuente:"2024", dominio:"D5", tema:"Intervención pedagógica (objetividad de la ciencia)",
  enunciado:"En un tercero medio, al evaluar la objetividad de la ciencia, un estudiante sostiene que 'siempre todo será subjetivo' y otros defienden la objetividad pero les cuesta fundamentar.\n\n¿Cuál de las siguientes intervenciones permite consolidar el aprendizaje?",
  opciones:{A:"Clarificar al curso que ambas posturas representan dos paradigmas diferentes, explicando cada una con los autores y textos revisados en clases. Luego, pedir que escriban sus respuestas.",B:"Hacer énfasis en la importancia de la fundamentación, recordando en qué consiste una buena argumentación. Luego, pedir que compartan sus respuestas.",C:"Recordar los pasos del método científico y pedir que respondan sobre su propósito y relación con la objetividad. Luego, compartir respuestas.",D:"Dividir el curso en las dos posturas y que discutan internamente las fundamentaciones, revisando sus apuntes sobre las teorías epistemológicas. Luego, comparten argumentos."},
  correcta:"A",
  explicacion:"El nudo del problema es conceptual: los estudiantes no distinguen que subjetivismo y objetivismo son paradigmas epistemológicos distintos con autores propios. La intervención que consolida el aprendizaje clarifica esa distinción teórica apoyándose en los autores y textos ya estudiados, y luego pide aplicarla. Las demás trabajan la argumentación o el método, sin reparar la confusión epistemológica de fondo."
},
{
  id:"2024-41", fuente:"2024", dominio:"D2", tema:"Cambio sustancial (Aristóteles)",
  enunciado:"Según la metafísica aristotélica, este tipo de cambio supone la modificación radical, es decir, que algo deje de ser lo que era y pase a ser otra cosa. Considera dos formas propias que son la generación y la corrupción.\n\n¿A qué tipo de cambio hace referencia el párrafo anterior?",
  opciones:{A:"Sustancial.",B:"Accidental.",C:"Cuantitativo.",D:"Cualitativo."},
  correcta:"A",
  explicacion:"En Aristóteles, el cambio sustancial afecta a la sustancia misma: la cosa deja de ser lo que era (corrupción) y surge otra (generación). El cambio accidental, en cambio, modifica solo accidentes manteniendo la sustancia: puede ser cuantitativo (tamaño), cualitativo (color) o local (lugar)."
},
{
  id:"2024-42", fuente:"2024", dominio:"D3", tema:"Hume (crítica a la inducción)",
  enunciado:"¿Cuál de los siguientes enunciados corresponde a la crítica que realiza David Hume a las inferencias inductivas?",
  opciones:{A:"Que el pasado es la única fuente real de certeza, pues del futuro nunca se sabe.",B:"Que parten de un hecho que después termina generalizándose.",C:"Que están basadas en relaciones de ideas, por lo que pueden llegar a ser contradictorias.",D:"Que no es posible realizar una inferencia inductiva de un futuro no observado."},
  correcta:"D",
  explicacion:"Hume señala que la inducción no tiene justificación racional: inferimos que el futuro se parecerá al pasado (uniformidad de la naturaleza) solo por hábito o costumbre, no por una necesidad lógica. No podemos justificar racionalmente una inferencia sobre casos futuros no observados (D). Es el célebre 'problema de la inducción'."
},
{
  id:"2024-43", fuente:"2024", dominio:"D3", tema:"Verdad y posverdad (Sztajnszrajber)",
  enunciado:"¿Cuál es el problema de la verdad según el filósofo Darío Sztajnszrajber?",
  opciones:{A:"Que es una idea que se ha nutrido de los medios de comunicación y las redes sociales.",B:"Que es una idea que se ha mantenido sin cambios y que requiere ser revisada.",C:"Que es un concepto tradicional que permite entendernos.",D:"Que es un concepto que ha muerto y ha sido reemplazado por la posverdad."},
  correcta:"D",
  explicacion:"Sztajnszrajber, en clave posmoderna/nietzscheana, plantea que la Verdad (con mayúscula, absoluta) 'ha muerto' como fundamento único y hoy convivimos con la posverdad: múltiples relatos donde lo afectivo y lo construido desplazan a la verdad objetiva tradicional."
},
{
  id:"2024-44", fuente:"2024", dominio:"D5", tema:"Aprendizaje profundo",
  enunciado:"Un tercero medio trabaja la diferenciación de las preguntas filosóficas con enfoque de aprendizaje profundo, sobre el OA de formular preguntas significativas (justicia, libertad, igualdad).\n\n¿Cuál de las siguientes actividades permitiría desarrollar el objetivo apuntando a un aprendizaje profundo?",
  opciones:{A:"Realizar una lluvia de ideas respecto a ejemplos de distintos tipos de preguntas que se dan en contextos legales, normativos, coloquiales, escolares, etc.",B:"Analizar una infografía que contenga la indeterminación de las respuestas, la apertura a la discusión y el espacio reflexivo al responder.",C:"Organizar un debate respecto al uso de preguntas de tipo cerradas en las evaluaciones escolares de Filosofía.",D:"Diseñar un mapa conceptual con la ramificación de respuestas correctas o equivocadas, basadas en la abstracción y en el empirismo."},
  correcta:"B",
  explicacion:"El aprendizaje profundo busca que el estudiante comprenda los rasgos esenciales de lo filosófico (apertura, indeterminación de respuestas, reflexión). Analizar una infografía centrada justamente en esos rasgos de la pregunta filosófica desarrolla esa comprensión profunda. La lluvia de ideas es superficial/inicial, y las otras desvían el foco."
},
{
  id:"2024-45", fuente:"2024", dominio:"D3", tema:"Ciencia (Bunge)",
  enunciado:"El filósofo Mario Bunge sostiene que, para entender el mundo, el ser humano establece un mundo artificial a través de la ciencia.\n\n¿Qué caracteriza esta idea del autor?",
  opciones:{A:"Un conocimiento racional y verificable, por tanto, falible.",B:"Un conocimiento racional infalible, exacto.",C:"Un conocimiento racional pero no verificable, inexacto.",D:"Un conocimiento racional centrado en las preguntas y en la comprensión."},
  correcta:"C",
  explicacion:"Clave oficial: C. ⚠️ Nota para tu estudio: Bunge, como realista científico, caracteriza el conocimiento científico como racional, SISTEMÁTICO, VERIFICABLE/contrastable y FALIBLE (perfectible); por eso muchos especialistas marcarían la opción A como la correcta. La clave oficial, sin embargo, indica C, enfatizando el carácter de 'construcción artificial/modelo' que no agota la realidad. Memoriza la respuesta oficial (C), pero ten presente la caracterización estándar de Bunge (racional, verificable, falible)."
},
{
  id:"2024-46", fuente:"2024", dominio:"D2", tema:"Heráclito y Parménides",
  enunciado:"En lo que respecta al cambio y movimiento, ¿qué diferencia existe entre los planteamientos de Heráclito y Parménides?",
  opciones:{A:"Para Heráclito el mundo está en constantes transformaciones, mientras que para Parménides el Ser ha sufrido una única transformación.",B:"Para Heráclito no pueden fijarse los límites de una entidad dado que todo cambia, mientras que para Parménides el Ser es perfecto e inmutable a consecuencia de su propia esencia.",C:"Para Heráclito el río es un aforismo utilizado para explicar el cambio del Ser, mientras que para Parménides el cambio y el movimiento solo son engaños a los sentidos.",D:"Para Heráclito en algún momento vamos a envejecer para luego perecer, mientras que para Parménides ninguno de esos conceptos tan siquiera existe."},
  correcta:"B",
  explicacion:"Heráclito: todo fluye (panta rhei), el devenir es lo real, nada permanece ('no te bañas dos veces en el mismo río'). Parménides: el Ser es uno, eterno, inmutable y perfecto; el cambio y el movimiento son ilusiones. La opción B expresa con precisión esa oposición esencial. Cuidado con C: para Parménides el cambio es engaño de los sentidos, pero atribuye mal el 'río' como explicación del 'cambio del Ser'."
},
{
  id:"2024-47", fuente:"2024", dominio:"D2", tema:"Universales (Quine)",
  enunciado:"Willard van Orman Quine, en su texto Desde un punto de vista lógico, desestima la necesidad de buscar los universales, como propusieron Platón y Aristóteles.\n\n¿Cuál es la perspectiva de este filósofo?",
  opciones:{A:"Los universales basan su concepción de la realidad desde una perspectiva dualista.",B:"Los universales son una cuestión trascendental, más bien cercana al racionalismo.",C:"Los universales no son cognoscibles, ya que no hay conocimiento certero de lo que no se puede dudar.",D:"Los universales no requieren algo más allá de las entidades para explicar su existencia."},
  correcta:"D",
  explicacion:"Quine sostiene una postura nominalista/economizadora (afín a su criterio 'ser es ser el valor de una variable' y a la navaja de Occam): no hace falta postular entidades abstractas universales más allá de las entidades particulares para dar cuenta de la realidad. Por eso D."
},
{
  id:"2024-48", fuente:"2024", dominio:"D2", tema:"Libertad (Sartre y Ortega)",
  enunciado:"Considerando que la postura de Jean Paul Sartre establece que 'la libertad es absoluta y radical', ¿en qué se diferencia con el concepto de libertad de José Ortega y Gasset?",
  opciones:{A:"En que es imposible.",B:"En que es limitada e imperfecta.",C:"En que es la resistencia al poder y al control.",D:"En que se opone frontalmente a la esclavitud."},
  correcta:"B",
  explicacion:"Para Sartre la libertad es absoluta y total (estamos 'condenados a ser libres'). Para Ortega y Gasset, en cambio, la libertad está condicionada por la circunstancia ('yo soy yo y mi circunstancia'): es una libertad situada, limitada e imperfecta, que se ejerce dentro de un margen dado."
},
{
  id:"2024-49", fuente:"2024", dominio:"D3", tema:"El bien (Kant y Hume)",
  enunciado:"¿Cuál es la diferencia entre Immanuel Kant y David Hume respecto del concepto de bien?",
  opciones:{A:"Kant lo relaciona con la subjetividad y Hume con la racionalidad.",B:"Kant lo relaciona con la prudencia y Hume con la sensibilidad.",C:"Kant lo relaciona con una ley universal y Hume con el beneficio.",D:"Kant lo relaciona con el deber y Hume con lo subjetivo."},
  correcta:"D",
  explicacion:"Para Kant, lo bueno se funda en el deber y la razón (una ley moral universal, el imperativo categórico), con independencia de las inclinaciones. Para Hume, la moral se asienta en los sentimientos y el sentido moral: lo bueno depende de la aprobación o desaprobación afectiva (subjetiva). La clave marca D (deber vs. subjetivo)."
},
{
  id:"2024-50", fuente:"2024", dominio:"D3", tema:"Realidad e inteligencia (Zubiri)",
  enunciado:"¿Qué tipo de inteligencia atribuye a los seres humanos la nueva categoría de la realidad propuesta por Xavier Zubiri?",
  opciones:{A:"Absoluta.",B:"Sensible.",C:"Sentiente.",D:"Inteligible."},
  correcta:"C",
  explicacion:"Zubiri propone la noción de 'inteligencia sentiente': no hay un abismo entre sentir e inteligir; el ser humano aprehende la realidad en un acto unitario donde sentir e inteligir son momentos de un mismo acto. Rechaza así tanto el puro sensualismo como el puro intelectualismo."
},
{
  id:"2024-51", fuente:"2024", dominio:"D3", tema:"Imperativos de Kant",
  enunciado:"En la ética kantiana se distingue entre el Imperativo Categórico y el Imperativo Hipotético. Los hipotéticos expresan la necesidad de una acción en el supuesto de que el sujeto quiera el fin al cual se ordena; los categóricos expresan la necesidad de una acción por sí misma, sin considerar el fin.\n\n¿Cuál de las siguientes opciones NO corresponde a la formulación Imperativo Hipotético e Imperativo Categórico, respectivamente?",
  opciones:{A:"La disculpa debe existir si se cometió un error - no hay que vengarse.",B:"Si estudio mucho llegaré a ser un gran profesional - siempre hay que hacer el bien a los demás.",C:"Si mientes, la mentira saldrá más adelante - no se debe practicar el engaño.",D:"Honrar a tus padres te trae prosperidad - siempre hay que asistir a aquellos que lo necesiten."},
  correcta:"A",
  explicacion:"Un imperativo hipotético tiene forma condicional 'si quieres X, haz Y' (medio-fin); el categórico es un mandato incondicional. En B, C y D el primer enunciado es hipotético ('si estudio…', 'si mientes…', 'honrar… trae prosperidad') y el segundo es categórico ('hay que hacer el bien', 'no se debe engañar', 'asistir a quien lo necesite'). En A, 'la disculpa debe existir si se cometió un error' no es un verdadero medio-fin condicional del tipo hipotético kantiano; por eso NO corresponde."
},
{
  id:"2024-52", fuente:"2024", dominio:"D2", tema:"Tomás de Aquino (vías)",
  enunciado:"Cuando santo Tomás de Aquino establece sus 5 vías para demostrar la existencia de Dios, recurre, en su causa primera, al concepto del movimiento.\n\n¿En qué basa este argumento santo Tomás de Aquino?",
  opciones:{A:"En el Nous de Anaxágoras.",B:"En la perfección del mundo de las ideas de Platón.",C:"En el Ápeiron de Anaximandro.",D:"En el primer motor inmóvil de Aristóteles."},
  correcta:"D",
  explicacion:"La primera vía de Tomás de Aquino (ex motu) parte del movimiento: todo lo que se mueve es movido por otro, y para evitar un regreso al infinito debe existir un primer motor que mueve sin ser movido. Ese 'primer motor inmóvil' lo toma de la metafísica de Aristóteles e identifica con Dios."
},
{
  id:"2024-53", fuente:"2024", dominio:"D5", tema:"Indicadores de evaluación",
  enunciado:"Una profesora trabaja el OA 'Analizar y fundamentar diversas perspectivas filosóficas…'. La evaluación final es un trabajo escrito sobre la visión personal del concepto de cambio, a partir de las perspectivas filosóficas aprendidas.\n\n¿Cuál de los siguientes indicadores es pertinente para la evaluación del OA?",
  opciones:{A:"Argumenta una postura sobre el concepto de cambio, a partir de los autores vistos.",B:"Aplica el concepto de cambio de Aristóteles en un ejemplo de la vida cotidiana.",C:"Investiga las distintas perspectivas acerca del cambio en la Filosofía.",D:"Utiliza correctamente la citación y referenciación en el trabajo escrito."},
  correcta:"A",
  explicacion:"El OA pide 'analizar y fundamentar diversas perspectivas' y una 'visión personal'. El indicador pertinente evalúa justamente eso: que el estudiante ARGUMENTE una postura propia sobre el cambio apoyándose en los autores. B es muy acotado (un solo autor/aplicación), C se queda en investigar (no fundamentar postura) y D evalúa un aspecto formal, no el núcleo del OA."
},
{
  id:"2024-54", fuente:"2024", dominio:"D3", tema:"Política y ética (Maquiavelo/Coady)",
  enunciado:"¿Qué idea tienen en común Nicolás Maquiavelo y Cecil Anthony John Coady en cuanto a la relación entre política y ética?",
  opciones:{A:"Cualquier problema político debe abordarse desde el mundo y no desde el individuo.",B:"El gobernante no debe temer ensuciarse las manos con tal de mantener el poder.",C:"Los hombres reunidos en sociedad renuncian cada uno de ellos al poder de ejecutar la ley natural.",D:"La esencia de la política es el disenso, entendiéndola como la manifestación de una separación de lo sensible consigo mismo."},
  correcta:"B",
  explicacion:"El 'problema de las manos sucias' (dirty hands): tanto Maquiavelo como Coady reconocen que la acción política puede exigir realizar actos moralmente cuestionables por el bien del Estado o el mantenimiento del poder. La opción C describe el contractualismo (Locke) y la D remite a Rancière/Mouffe (disenso)."
},
{
  id:"2024-55", fuente:"2024", dominio:"D5", tema:"Diagnóstico de dificultades",
  enunciado:"En la unidad sobre el conocimiento y la verdad, el docente pide un mapa mental con la estructura argumentativa de las Meditaciones Metafísicas de Descartes. Muy pocas duplas logran el mapa mental; tienen algunos conceptos, pero sin secuencia lógica de los argumentos.\n\n¿Qué opción refleja una acción pedagógica pertinente para abordar las dificultades?",
  opciones:{A:"Entregar una pauta evaluativa que reconozca el nivel de cumplimiento a aquellas duplas que lograron finalizar.",B:"Recoger información en las diversas duplas que permita reconocer si la dificultad se da desde el ámbito conceptual, actitudinal o de habilidades.",C:"Modelar un organizador gráfico ya preparado y pedir a todos/as que lo copien en su cuaderno.",D:"Reconocer que para el estudiantado el texto es demasiado complejo, cambiando el texto a uno alternativo."},
  correcta:"B",
  explicacion:"Antes de intervenir, el docente necesita DIAGNOSTICAR la causa de la dificultad: ¿es conceptual (no entienden los argumentos), de habilidades (no saben estructurar un mapa) o actitudinal? Recoger esa información (B) permite una respuesta pertinente. Copiar un organizador (C) o cambiar el texto (D) actúa sin saber el origen del problema."
},
{
  id:"2024-56", fuente:"2024", dominio:"D3", tema:"Ética práctica (Singer)",
  enunciado:"En Ética práctica, Peter Singer plantea que la principal razón para actuar éticamente es 'dar sentido a nuestras vidas'.\n\n¿Qué implica la idea anterior?",
  opciones:{A:"Entregar el máximo respeto a la dignidad intrínseca del ser humano.",B:"Poder sacar partido a nuestro Ser universal.",C:"Pensar por ti mismo, porque no todo vale igual.",D:"Poder para ir más allá de nuestros propios intereses."},
  correcta:"D",
  explicacion:"Para Singer (utilitarista), actuar éticamente da sentido a la vida porque nos saca del egoísmo: adoptar el punto de vista ético es trascender el interés propio y considerar imparcialmente los intereses de todos los afectados. Por eso 'ir más allá de nuestros propios intereses' (D)."
},
{
  id:"2024-57", fuente:"2024", dominio:"D3", tema:"Libertad (Hayek)",
  enunciado:"¿Cuál de los siguientes enunciados NO corresponde al concepto de libertad propuesto por Friedrich Hayek?",
  opciones:{A:"La libertad es fruto de la civilización y está íntimamente ligada a ella, ya que sin libertad no es posible la civilización y sin civilización no es posible la libertad.",B:"La libertad es una ausencia de coacción, trasladando el problema de la palabra libertad a la palabra 'coacción'.",C:"Es un componente necesario de la felicidad, entendiéndola como la facultad que tiene el individuo de actuar sobre todo aquello que no afecte ni perjudique a los demás.",D:"El reconocimiento de la propiedad como una de las bases para la libertad porque supondría un espacio propio, libre y conocido en el que puede formarse la personalidad."},
  correcta:"C",
  explicacion:"Hayek define la libertad como ausencia de coacción (libertad negativa, B), ligada a la civilización (A) y a la propiedad privada como condición de un espacio propio (D). La opción C corresponde más bien a la formulación liberal clásica de Stuart Mill (libertad como no dañar a los demás, 'principio del daño'), no a Hayek; por eso NO corresponde."
},
{
  id:"2024-58", fuente:"2024", dominio:"D5", tema:"Indicadores (rúbrica actitudinal)",
  enunciado:"En la unidad 'La ética permite evaluar y mejorar los supuestos de nuestros actos', cada estudiante investiga una cultura al azar y presenta una explicación descriptiva de cómo se entiende un fenómeno. Se evalúa con rúbrica analítica la actitud de 'Participar asumiendo posturas razonadas en distintos ámbitos'.\n\n¿Cuál de los siguientes indicadores es el apropiado?",
  opciones:{A:"Expresan su opinión respecto a la cultura estudiada, tomando en consideración su enfoque personal.",B:"Escuchan atentamente a sus compañeros/as cuando exponen respuestas culturales distintas a la estudiada.",C:"Justifican los modos de llegar a las conclusiones presentadas respecto al análisis de la respuesta cultural al fenómeno presentado.",D:"Demuestran interés al investigar respecto a las características culturales que se presentan sobre el fenómeno."},
  correcta:"C",
  explicacion:"La actitud a evaluar es 'participar asumiendo POSTURAS RAZONADAS'. El indicador pertinente mide que JUSTIFIQUEN cómo llegaron a sus conclusiones (C), que es precisamente dar razones de la postura. 'Escuchar' (B) o 'demostrar interés' (D) son actitudes distintas; 'expresar opinión' (A) no incluye la fundamentación razonada."
},
{
  id:"2024-59", fuente:"2024", dominio:"D5", tema:"Retroalimentación",
  enunciado:"Estudiantes de cuarto medio elaboran un ensayo sobre el valor y el lugar de la filosofía en la sociedad actual, con una visión personal. Al revisar borradores, el docente advierte que algunos tienen dificultad para lograr una visión personal sobre el valor de la filosofía en sus vidas.\n\n¿Qué opción corresponde a una buena práctica de retroalimentación para superar la dificultad?",
  opciones:{A:"Revisar la pauta de evaluación de forma colectiva para clarificar con más detalle el indicador referido a elaborar visiones personales sobre la filosofía.",B:"Realizar preguntas a los estudiantes de forma individual para indagar en sus experiencias con la filosofía, permitiéndoles identificar la relación con ella.",C:"Repasar a algunos de los filósofos vistos en la unidad con los estudiantes para que ellos adviertan que sus ideas no son originales.",D:"Diseñar una nueva actividad con todo el curso para reforzar los aspectos que se encontraron como debilidad en esta clase."},
  correcta:"B",
  explicacion:"La dificultad es construir una visión PERSONAL (vincular la filosofía con su propia vida). La retroalimentación más pertinente es dialógica e individual: preguntar por sus experiencias para ayudarlos a descubrir su propia relación con la filosofía (B). Clarificar la pauta (A) es útil pero no genera la visión personal; las otras desvían o no atienden la dificultad específica."
},
{
  id:"2024-60", fuente:"2024", dominio:"D5", tema:"Conocimientos previos (epistemología)",
  enunciado:"Estudiantes de tercero medio desarrollan la unidad 'El conocimiento, la ciencia y la verdad' y se espera que evalúen la objetividad de la ciencia usando las teorías epistemológicas del programa.\n\n¿Cuáles de los siguientes conocimientos previos se requiere para abordar el objetivo?",
  opciones:{A:"Existencia y esencia.",B:"Pensamiento crítico y creativo.",C:"Lógica y argumentación.",D:"Racionalismo y empirismo."},
  correcta:"D",
  explicacion:"Para evaluar la objetividad de la ciencia y las teorías epistemológicas, el conocimiento previo necesario es el de las grandes corrientes sobre el origen y la validez del conocimiento: racionalismo y empirismo. 'Existencia y esencia' es ontología; las otras son habilidades, no los contenidos epistemológicos de base."
},

/* ---------- PREGUNTAS NUEVAS (refuerzo por dominio) ---------- */
{
  id:"nueva-1", fuente:"nueva", dominio:"D1", tema:"Del mito al logos",
  enunciado:"El tránsito 'del mito al logos' en el origen de la filosofía griega se caracteriza principalmente por:",
  opciones:{A:"El reemplazo de las explicaciones basadas en dioses y relatos por explicaciones racionales que buscan causas naturales (arché).",B:"La sustitución de la razón por la intuición poética como fuente de verdad.",C:"La aparición de la escritura alfabética que permitió registrar los mitos.",D:"El abandono total de toda pregunta sobre el origen del cosmos."},
  correcta:"A",
  explicacion:"El paso del mito al logos consiste en que los primeros filósofos (presocráticos) dejan de explicar la realidad mediante relatos míticos y dioses, y buscan un principio racional y natural (arché: agua, ápeiron, aire, fuego) que dé cuenta del cosmos. Es el nacimiento de la explicación racional."
},
{
  id:"nueva-2", fuente:"nueva", dominio:"D1", tema:"Mayéutica (Sócrates)",
  enunciado:"La mayéutica socrática se describe mejor como:",
  opciones:{A:"Un método para memorizar definiciones mediante la repetición.",B:"El arte de 'dar a luz' el conocimiento en el interlocutor mediante preguntas que lo llevan a examinar sus propias ideas.",C:"Un procedimiento para imponer la verdad del maestro al discípulo.",D:"La técnica de dividir un concepto en género y especie."},
  correcta:"B",
  explicacion:"Sócrates comparaba su método con el oficio de su madre partera: mediante preguntas sucesivas (y la ironía previa que muestra la ignorancia), ayuda al interlocutor a 'parir' por sí mismo el conocimiento que ya lleva dentro. No impone verdades (C) ni es mera memorización."
},
{
  id:"nueva-3", fuente:"nueva", dominio:"D2", tema:"Dualismo (Descartes)",
  enunciado:"El dualismo ontológico de Descartes distingue dos sustancias. ¿Cuáles son?",
  opciones:{A:"Forma y materia.",B:"Potencia y acto.",C:"Res cogitans (sustancia pensante) y res extensa (sustancia extensa).",D:"Noúmeno y fenómeno."},
  correcta:"C",
  explicacion:"Descartes distingue la res cogitans (la mente o sustancia pensante, inextensa) de la res extensa (la materia o sustancia corpórea, extensa). Forma/materia y potencia/acto son aristotélicos; noúmeno/fenómeno es kantiano."
},
{
  id:"nueva-4", fuente:"nueva", dominio:"D2", tema:"Existencialismo (Sartre)",
  enunciado:"Cuando Sartre afirma que en el ser humano 'la existencia precede a la esencia', quiere decir que:",
  opciones:{A:"El ser humano nace con una naturaleza fija que determina su vida.",B:"Primero el ser humano existe y, mediante sus elecciones libres, se va definiendo a sí mismo; no hay una esencia previa dada.",C:"La esencia divina determina el destino humano.",D:"La existencia es una ilusión y solo la esencia es real."},
  correcta:"B",
  explicacion:"A diferencia de un objeto fabricado (cuya esencia/función precede a su existencia), el ser humano primero existe, se encuentra arrojado al mundo, y solo después se define por sus actos libres. No hay naturaleza humana previa: somos lo que hacemos de nosotros mismos."
},
{
  id:"nueva-5", fuente:"nueva", dominio:"D3", tema:"Utilitarismo (Mill)",
  enunciado:"El principio de utilidad de John Stuart Mill sostiene que una acción es moralmente correcta en la medida en que:",
  opciones:{A:"Cumple con el deber por respeto a la ley moral, sin importar las consecuencias.",B:"Tiende a promover la mayor felicidad (placer y ausencia de dolor) para el mayor número de personas.",C:"Se ajusta a la virtud del justo medio entre dos extremos.",D:"Respeta un contrato social previamente acordado."},
  correcta:"B",
  explicacion:"El utilitarismo es consecuencialista: lo correcto se mide por las consecuencias en términos de bienestar. El principio de la mayor felicidad busca maximizar el placer/felicidad del mayor número. La opción A es la ética kantiana del deber; C es Aristóteles; D es contractualismo."
},
{
  id:"nueva-6", fuente:"nueva", dominio:"D3", tema:"Justicia (Rawls)",
  enunciado:"En la teoría de la justicia de John Rawls, el 'velo de ignorancia' sirve para:",
  opciones:{A:"Garantizar que nadie conozca las leyes del Estado.",B:"Que las partes elijan los principios de justicia sin saber qué posición social, talentos o condiciones ocuparán, asegurando imparcialidad.",C:"Justificar que las desigualdades son siempre naturales.",D:"Eliminar toda forma de propiedad privada."},
  correcta:"B",
  explicacion:"En la 'posición original', las partes deliberan tras un velo de ignorancia que les impide conocer su lugar en la sociedad (clase, raza, género, talentos). Al no poder favorecerse a sí mismas, eligen principios justos e imparciales. Es un recurso para fundar la 'justicia como equidad'."
},
{
  id:"nueva-7", fuente:"nueva", dominio:"D3", tema:"Paradigmas (Kuhn)",
  enunciado:"Según Thomas Kuhn, una 'revolución científica' ocurre cuando:",
  opciones:{A:"Se acumulan gradualmente nuevos datos que confirman la teoría vigente.",B:"Un paradigma dominante entra en crisis por anomalías y es reemplazado por otro inconmensurable con el anterior.",C:"Se aplica estrictamente el criterio de falsación a cada hipótesis.",D:"Los científicos alcanzan la verdad absoluta y definitiva."},
  correcta:"B",
  explicacion:"Para Kuhn la ciencia no progresa solo por acumulación. Durante la 'ciencia normal' se trabaja dentro de un paradigma; cuando las anomalías se acumulan, sobreviene una crisis y una revolución que instaura un nuevo paradigma, inconmensurable con el anterior. La opción C corresponde a Popper."
},
{
  id:"nueva-8", fuente:"nueva", dominio:"D3", tema:"Poder y saber (Foucault)",
  enunciado:"Para Michel Foucault, la relación entre poder y saber implica que:",
  opciones:{A:"El saber es siempre neutral y está separado del poder.",B:"El poder y el saber se producen mutuamente: no hay poder sin un campo de saber, ni saber que no suponga relaciones de poder.",C:"Solo el Estado posee poder, y este reprime el conocimiento.",D:"El saber verdadero elimina por completo el poder."},
  correcta:"B",
  explicacion:"Foucault habla de 'poder-saber': ambos son inseparables y se constituyen recíprocamente. El poder no es solo represivo, también es productivo (produce discursos, verdades, sujetos). El saber nunca es neutral: está atravesado por relaciones de poder."
},
{
  id:"nueva-9", fuente:"nueva", dominio:"D4", tema:"Belleza (Platón)",
  enunciado:"En la estética de Platón, la belleza sensible de las cosas concretas es valiosa porque:",
  opciones:{A:"Es la forma más alta y perfecta de belleza que existe.",B:"Es un reflejo o participación de la Idea de Belleza, hacia la cual el alma puede ascender.",C:"Carece por completo de valor y debe ser rechazada.",D:"Es idéntica a la utilidad del objeto."},
  correcta:"B",
  explicacion:"Para Platón, las cosas bellas sensibles participan de la Idea de Belleza en sí (eterna e inmutable). La belleza concreta puede ser un punto de partida para que el alma, en una ascensión (como en el Banquete), se eleve hacia la contemplación de la Belleza ideal. No es la belleza suprema, sino su reflejo."
},
{
  id:"nueva-10", fuente:"nueva", dominio:"D4", tema:"Experiencia estética (Dewey)",
  enunciado:"John Dewey, en 'El arte como experiencia', sostiene que el arte:",
  opciones:{A:"Debe permanecer separado de la vida cotidiana, en museos y galerías.",B:"Es una experiencia que intensifica y completa la interacción del ser humano con su entorno, integrada en la vida.",C:"Solo tiene valor si imita fielmente la naturaleza.",D:"Es una actividad puramente intelectual, sin componente emocional."},
  correcta:"B",
  explicacion:"Dewey critica la separación entre arte y vida. Para él, la experiencia estética es una forma intensificada de la experiencia ordinaria: el arte continúa y completa la interacción entre el ser vivo y su entorno. Rechaza la idea del arte como algo aislado en pedestales (la 'teoría del museo')."
},
{
  id:"nueva-11", fuente:"nueva", dominio:"D5", tema:"Evaluación formativa",
  enunciado:"La principal diferencia entre evaluación formativa y sumativa es que la formativa:",
  opciones:{A:"Siempre lleva calificación y se aplica al final del proceso.",B:"Busca retroalimentar y ajustar la enseñanza y el aprendizaje durante el proceso, sin un fin principalmente calificador.",C:"Solo puede realizarla el estudiante sobre sí mismo.",D:"Mide exclusivamente contenidos conceptuales."},
  correcta:"B",
  explicacion:"La evaluación formativa es parte del proceso: entrega retroalimentación para que docente y estudiantes ajusten estrategias y avancen hacia los objetivos. La sumativa, en cambio, certifica/califica logros al cierre de un período. La formativa no tiene como fin principal calificar."
},
{
  id:"nueva-12", fuente:"nueva", dominio:"D5", tema:"Dialéctica (Hegel)",
  enunciado:"La dialéctica hegeliana se estructura, de forma simplificada, en el movimiento de:",
  opciones:{A:"Inducción, deducción y analogía.",B:"Tesis, antítesis y síntesis (momento de superación o Aufhebung).",C:"Duda, certeza y fe.",D:"Percepción, memoria e imaginación."},
  correcta:"B",
  explicacion:"La dialéctica de Hegel avanza por contradicciones: una posición (tesis) genera su opuesta (antítesis), y la tensión se resuelve en una síntesis que conserva y supera a ambas (Aufhebung). Es el motor del desarrollo del Espíritu y de la historia. Útil también como método de enseñanza del pensamiento filosófico."
},
{
  id:"nueva-13", fuente:"nueva", dominio:"D3", tema:"Ética del cuidado (Gilligan)",
  enunciado:"La 'ética del cuidado' propuesta por Carol Gilligan se caracteriza por:",
  opciones:{A:"Priorizar principios universales y abstractos de justicia por sobre los vínculos concretos.",B:"Centrarse en la responsabilidad hacia los otros, los vínculos, las relaciones y el contexto concreto de las personas.",C:"Afirmar que la moral es puramente racional y desligada de las emociones.",D:"Rechazar toda diferencia entre las experiencias morales de hombres y mujeres."},
  correcta:"B",
  explicacion:"Gilligan, frente al enfoque de la justicia basado en principios abstractos (Kohlberg), propone una ética del cuidado que valora la responsabilidad, la empatía, los vínculos y la atención al contexto y a las relaciones concretas. Surge de escuchar voces (asociadas históricamente a la experiencia femenina) silenciadas en la teoría moral dominante."
},
{
  id:"nueva-14", fuente:"nueva", dominio:"D3", tema:"Tecnología (Byung-Chul Han)",
  enunciado:"En su crítica a la sociedad contemporánea, Byung-Chul Han sostiene que vivimos en una 'sociedad del cansancio' caracterizada por:",
  opciones:{A:"Una disciplina externa impuesta por instituciones represivas, como en el siglo XIX.",B:"La autoexplotación: el individuo se convierte en 'empresario de sí mismo' y se agota persiguiendo el rendimiento, bajo una aparente libertad.",C:"La ausencia total de tecnología y comunicación.",D:"El predominio del ocio y la contemplación sobre la productividad."},
  correcta:"B",
  explicacion:"Han describe el paso de la 'sociedad disciplinaria' (Foucault) a la 'sociedad del rendimiento': ya no hay un amo que coacciona desde fuera; el propio sujeto se explota a sí mismo creyéndose libre. El resultado es agotamiento, depresión y 'cansancio'. Es un referente clave de la ética de la tecnología del temario."
},
{
  id:"nueva-15", fuente:"nueva", dominio:"D3", tema:"Derechos Humanos (Arendt)",
  enunciado:"Hannah Arendt, al analizar la situación de apátridas y refugiados, formuló la idea del 'derecho a tener derechos', con la cual señala que:",
  opciones:{A:"Los derechos humanos son plenamente efectivos aunque la persona quede fuera de toda comunidad política.",B:"La pertenencia a una comunidad política organizada es la condición que hace efectivos los derechos; quien la pierde queda desprotegido pese a ser humano.",C:"Solo los ciudadanos nacidos en un país tienen dignidad.",D:"Los derechos humanos derivan exclusivamente de la naturaleza biológica."},
  correcta:"B",
  explicacion:"Arendt observó que los apátridas, al perder su pertenencia a una comunidad política, quedaban desprovistos de protección efectiva pese a seguir siendo humanos. De ahí el 'derecho a tener derechos': el derecho fundamental es el de pertenecer a una comunidad que garantice los demás derechos. Es clave en el dominio de Estado, sociedad y poder."
}
];
