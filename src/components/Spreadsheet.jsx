import React from "react";

// Data definitions for each section
const sections = [
  {
    key: "worldbuilding",
    title: "Worldbuilding & Lore",
    subtitle:
      "Document your world's history, geography, cultures, and mythology",
    instructions:
      "Use this section to build the foundation of your world. Start with broad concepts and gradually add detail. Consider how each element affects your story and characters.",
    columns: [
      { header: "Category", width: "15%" },
      { header: "Element", width: "20%" },
      { header: "Description", width: "35%" },
      { header: "Story Impact", width: "20%" },
      { header: "Status", width: "10%" },
    ],
    rows: [
      { isTitle: true, title: "GEOGRAPHY & SETTING" },
      {
        category: "Geography",
        fields: [
          {
            name: "worldbuilding_geography_element",
            type: "input",
            placeholder: "e.g. The Ironlands",
          },
          {
            name: "worldbuilding_geography_description",
            type: "textarea",
            placeholder:
              "Describe the physical characteristics, climate, natural resources.",
          },
          {
            name: "worldbuilding_geography_impact",
            type: "textarea",
            placeholder:
              "How does this location affect the plot or characters?",
          },
          {
            name: "worldbuilding_geography_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        category: "Cities/Kingdoms",
        fields: [
          {
            name: "worldbuilding_cities_element",
            type: "input",
            placeholder: "e.g. Valenhall",
          },
          {
            name: "worldbuilding_cities_description",
            type: "textarea",
            placeholder: "Political structure, culture, notable features.",
          },
          {
            name: "worldbuilding_cities_impact",
            type: "textarea",
            placeholder: "Role in the story, conflicts, alliances.",
          },
          {
            name: "worldbuilding_cities_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        category: "Sacred/Important Places",
        fields: [
          {
            name: "worldbuilding_places_element",
            type: "input",
            placeholder: "e.g. The Sundering Peaks",
          },
          {
            name: "worldbuilding_places_description",
            type: "textarea",
            placeholder: "Why is this place significant? What happened here?",
          },
          {
            name: "worldbuilding_places_impact",
            type: "textarea",
            placeholder:
              "Quest destination, power source, historical significance.",
          },
          {
            name: "worldbuilding_places_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      { isTitle: true, title: "HISTORY & MYTHOLOGY" },
      {
        category: "Ancient History",
        fields: [
          {
            name: "worldbuilding_history_element",
            type: "input",
            placeholder: "e.g. The First Age",
          },
          {
            name: "worldbuilding_history_description",
            type: "textarea",
            placeholder:
              "Major historical events, civilizations, catastrophes.",
          },
          {
            name: "worldbuilding_history_impact",
            type: "textarea",
            placeholder: "How does this history influence current events?",
          },
          {
            name: "worldbuilding_history_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        category: "Legends & Myths",
        fields: [
          {
            name: "worldbuilding_legends_element",
            type: "input",
            placeholder: "e.g. The Starfall Prophecy",
          },
          {
            name: "worldbuilding_legends_description",
            type: "textarea",
            placeholder: "Cultural stories, religious beliefs, prophecies...",
          },
          {
            name: "worldbuilding_legends_impact",
            type: "textarea",
            placeholder:
              "Foreshadowing, character motivation, world beliefs...",
          },
          {
            name: "worldbuilding_legends_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        category: "Recent Events",
        fields: [
          {
            name: "worldbuilding_recent_element",
            type: "input",
            placeholder: "e.g. The War of Shadows",
          },
          {
            name: "worldbuilding_recent_description",
            type: "textarea",
            placeholder:
              "Events within living memory that shape the current world...",
          },
          {
            name: "worldbuilding_recent_impact",
            type: "textarea",
            placeholder:
              "Character backstories, current tensions, plot hooks...",
          },
          {
            name: "worldbuilding_recent_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      { isTitle: true, title: "CULTURES & SOCIETIES" },
      {
        category: "Races/Species",
        fields: [
          {
            name: "worldbuilding_culture_element",
            type: "input",
            placeholder: "e.g. Drakmori",
          },
          {
            name: "worldbuilding_culture_description",
            type: "textarea",
            placeholder: "Physical traits, abilities, lifespan, culture...",
          },
          {
            name: "worldbuilding_culture_impact",
            type: "textarea",
            placeholder: "Conflicts, alliances, character opportunities...",
          },
          {
            name: "worldbuilding_culture_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        category: "Social Systems",
        fields: [
          {
            name: "worldbuilding_social_element",
            type: "input",
            placeholder: "e.g. Guild Structure",
          },
          {
            name: "worldbuilding_social_description",
            type: "textarea",
            placeholder: "How society is organized, power structures...",
          },
          {
            name: "worldbuilding_social_impact",
            type: "textarea",
            placeholder:
              "Character constraints, plot obstacles, social dynamic...",
          },
          {
            name: "worldbuilding_social_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        category: "Religion & Philosophy",
        fields: [
          {
            name: "worldbuilding_beliefs_element",
            type: "input",
            placeholder: "e.g. The Eternal Flame",
          },
          {
            name: "worldbuilding_beliefs_description",
            type: "textarea",
            placeholder: "Belief systems, deities, religious practices...",
          },
          {
            name: "worldbuilding_beliefs_impact",
            type: "textarea",
            placeholder:
              "Character motivation, moral conflicts, world events...",
          },
          {
            name: "worldbuilding_beliefs_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
    ],
  },
  {
    key: "characters",
    title: "Character Development & Arcs",
    subtitle: "Track character histories, motivations, and story arcs",
    instructions:
      "Develop each character's internal and external journey. Focus on how they change throughout the story and what drives their decisions.",
    columns: [
      { header: "Character Name", width: "12%" },
      { header: "Role", width: "10%" },
      { header: "Background", width: "18%" },
      { header: "Core Motivation", width: "15%" },
      { header: "Internal Conflict", width: "12%" },
      { header: "Character Arc", width: "13%" },
      { header: "Key Relationships", width: "10%" },
      { header: "Status", width: "10%" },
    ],
    rows: [
      { isTitle: true, title: "MAIN CHARACTERS", rowClass: "character-arc" },
      {
        fields: [
          {
            name: "characters_protagonist_name",
            type: "input",
            placeholder: "Protagonist name",
          },
          {
            name: "characters_protagonist_role",
            type: "input",
            placeholder: "Hero/Chosen One",
          },
          {
            name: "characters_protagonist_background",
            type: "textarea",
            placeholder: "Origin, family, significant past events.",
          },
          {
            name: "characters_protagonist_motivation",
            type: "textarea",
            placeholder: "What drives them? What do they want most?",
          },
          {
            name: "characters_protagonist_conflict",
            type: "textarea",
            placeholder: "Internal struggles, fears, flaws...",
          },
          {
            name: "characters_protagonist_arc",
            type: "textarea",
            placeholder: "How do they change from beginning to end?",
          },
          {
            name: "characters_protagonist_relationships",
            type: "textarea",
            placeholder: "Key allies, enemies, mentors.",
          },
          {
            name: "characters_protagonist_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        fields: [
          {
            name: "characters_deuteragonist_name",
            type: "input",
            placeholder: "Deuteragonist",
          },
          {
            name: "characters_deuteragonist_role",
            type: "input",
            placeholder: "Companion/Love Interest",
          },
          {
            name: "characters_deuteragonist_background",
            type: "textarea",
            placeholder: "Background and how they meet protagonist.",
          },
          {
            name: "characters_deuteragonist_motivation",
            type: "textarea",
            placeholder: "Personal goals and desires.",
          },
          {
            name: "characters_deuteragonist_conflict",
            type: "textarea",
            placeholder: "Internal struggles and growth areas.",
          },
          {
            name: "characters_deuteragonist_arc",
            type: "textarea",
            placeholder: "Character development throughout story.",
          },
          {
            name: "characters_deuteragonist_relationships",
            type: "textarea",
            placeholder: "Connection to other characters.",
          },
          {
            name: "characters_deuteragonist_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        fields: [
          {
            name: "characters_antagonist_name",
            type: "input",
            placeholder: "Antagonist",
          },
          {
            name: "characters_antagonist_role",
            type: "input",
            placeholder: "Villain/Dark Lord",
          },
          {
            name: "characters_antagonist_background",
            type: "textarea",
            placeholder: "Origin of their power and evil...",
          },
          {
            name: "characters_antagonist_motivation",
            type: "textarea",
            placeholder: "What do they ultimately want to achieve?",
          },
          {
            name: "characters_antagonist_conflict",
            type: "textarea",
            placeholder: "Are they purely evil or complex?",
          },
          {
            name: "characters_antagonist_arc",
            type: "textarea",
            placeholder: "How do they evolve as a threat?",
          },
          {
            name: "characters_antagonist_relationships",
            type: "textarea",
            placeholder: "Minions, rivals, personal connections...",
          },
          {
            name: "characters_antagonist_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        isTitle: true,
        title: "SUPPORTING CHARACTERS",
        rowClass: "character-arc",
      },
      {
        fields: [
          {
            name: "characters_mentor_name",
            type: "input",
            placeholder: "Mentor Figure",
          },
          {
            name: "characters_mentor_role",
            type: "input",
            placeholder: "Wise Guide",
          },
          {
            name: "characters_mentor_background",
            type: "textarea",
            placeholder: "Experience and wisdom to share...",
          },
          {
            name: "characters_mentor_motivation",
            type: "textarea",
            placeholder: "Why do they help the hero?",
          },
          {
            name: "characters_mentor_conflict",
            type: "textarea",
            placeholder: "Past mistakes or regrets...",
          },
          {
            name: "characters_mentor_arc",
            type: "textarea",
            placeholder: "Mentorship journey and potential fate...",
          },
          {
            name: "characters_mentor_relationships",
            type: "textarea",
            placeholder: "History with other characters...",
          },
          {
            name: "characters_mentor_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        fields: [
          {
            name: "characters_friend_name",
            type: "input",
            placeholder: "Comic relief/Loyal Friend",
          },
          {
            name: "characters_friend_role",
            type: "input",
            placeholder: "Companion",
          },
          {
            name: "characters_friend_background",
            type: "textarea",
            placeholder: "How they join the group...",
          },
          {
            name: "characters_friend_motivation",
            type: "textarea",
            placeholder: "Personal stakes in the quest...",
          },
          {
            name: "characters_friend_conflict",
            type: "textarea",
            placeholder: "Hidden depths or serious moment...",
          },
          {
            name: "characters_friend_arc",
            type: "textarea",
            placeholder: "Growth beyond comic relief...",
          },
          {
            name: "characters_friend_relationships",
            type: "textarea",
            placeholder: "Group dynamics and friendships...",
          },
          {
            name: "characters_friend_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
      {
        fields: [
          {
            name: "characters_foe_name",
            type: "input",
            placeholder: "Secondary antagonist",
          },
          {
            name: "characters_foe_role",
            type: "input",
            placeholder: "Lieutenant/Rival",
          },
          {
            name: "characters_foe_background",
            type: "textarea",
            placeholder: "Connection to the main villain...",
          },
          {
            name: "characters_foe_motivation",
            type: "textarea",
            placeholder: "Personal vendetta or loyalty...",
          },
          {
            name: "characters_foe_conflict",
            type: "textarea",
            placeholder: "Moral complexity or pure antagonism...",
          },
          {
            name: "characters_foe_arc",
            type: "textarea",
            placeholder: "Escalating threat and final confrontation...",
          },
          {
            name: "characters_foe_relationships",
            type: "textarea",
            placeholder: "Relationship with heroes and villain...",
          },
          {
            name: "characters_foe_status",
            type: "input",
            placeholder: "Draft/Complete",
          },
        ],
      },
    ],
  },
  {
    key: "magic",
    title: "Magic System & Rules",
    subtitle: "Define your magic system's mechanics, limitations, and impact",
    instructions:
      "Create consistent rules for your magic system. Consider costs, limitations, and how magic affects society. Consistency is key for reader immersion.",
    columns: [
      { header: "Magic Type", width: "15%" },
      { header: "How It Works", width: "25%" },
      { header: "Power Source", width: "20%" },
      { header: "Limitations/Costs", width: "20%" },
      { header: "Societal Impact", width: "20%" },
    ],
    rows: [
      { isTitle: true, title: "CORE MAGIC SYSTEM", rowClass: "magic-rule" },
      {
        fields: [
          {
            name: "magic_elemental_type",
            type: "input",
            placeholder: "e.g. Elemental Magic",
          },
          {
            name: "magic_elemental_mechanics",
            type: "textarea",
            placeholder:
              "Describe the mechanics: gestures, words, mental focus.",
          },
          {
            name: "magic_elemental_source",
            type: "textarea",
            placeholder: "Internal energy, external sources, artifacts.",
          },
          {
            name: "magic_elemental_limits",
            type: "textarea",
            placeholder:
              "Physical exhaustion, material components, time limits.",
          },
          {
            name: "magic_elemental_impact",
            type: "textarea",
            placeholder: "How common is it? Who can use it? Social hierarchy.",
          },
        ],
      },
      {
        fields: [
          {
            name: "magic_divine_type",
            type: "input",
            placeholder: "e.g. Divine Magic",
          },
          {
            name: "magic_divine_mechanics",
            type: "textarea",
            placeholder: "Connection to deities, prayer, faith-based...",
          },
          {
            name: "magic_divine_source",
            type: "textarea",
            placeholder: "Divine favor, holy symbols, sacred locations...",
          },
          {
            name: "magic_divine_limits",
            type: "textarea",
            placeholder:
              "Loss of faith, divine displeasure, moral constraints...",
          },
          {
            name: "magic_divine_impact",
            type: "textarea",
            placeholder: "Religious hierarchy, temple influence, conflicts...",
          },
        ],
      },
      {
        fields: [
          {
            name: "magic_blood_type",
            type: "input",
            placeholder: "e.g. Blood Magic",
          },
          {
            name: "magic_blood_mechanics",
            type: "textarea",
            placeholder: "Life force manipulation, sacrifice, binding...",
          },
          {
            name: "magic_blood_source",
            type: "textarea",
            placeholder: "Life energy, blood, soul essence...",
          },
          {
            name: "magic_blood_limits",
            type: "textarea",
            placeholder: "Life drain, corruption, moral degradation...",
          },
          {
            name: "magic_blood_impact",
            type: "textarea",
            placeholder: "Forbidden knowledge, underground practice, fear...",
          },
        ],
      },
      {
        isTitle: true,
        title: "MAGIC RULES & CONSISTENCY",
        rowClass: "magic-rule",
      },
      {
        category: "Training & Learning",
        fields: [
          {
            name: "magic_training_mechanics",
            type: "textarea",
            placeholder:
              "How does one learn magic? Schools, apprenticeships, natural talent...",
          },
          {
            name: "magic_training_source",
            type: "textarea",
            placeholder: "What determines magical potential?",
          },
          {
            name: "magic_training_limits",
            type: "textarea",
            placeholder:
              "Time investment, failure consequences, prerequisites...",
          },
          {
            name: "magic_training_impact",
            type: "textarea",
            placeholder:
              "Educational systems, master-apprentice relationships...",
          },
        ],
      },
      {
        category: "Magical Artifacts",
        fields: [
          {
            name: "magic_artifacts_mechanics",
            type: "textarea",
            placeholder: "How are they created? How do they function?",
          },
          {
            name: "magic_artifacts_source",
            type: "textarea",
            placeholder: "Stored magic, channeling tools, power amplifiers...",
          },
          {
            name: "magic_artifacts_limits",
            type: "textarea",
            placeholder: "Depletion, corruption, binding to users...",
          },
          {
            name: "magic_artifacts_impact",
            type: "textarea",
            placeholder:
              "Wealth indicators, political tools, military advantages...",
          },
        ],
      },
      {
        category: "Magic vs Technology",
        fields: [
          {
            name: "magic_technology_mechanics",
            type: "textarea",
            placeholder: "Do they coexist? Replace each other? Interfere?",
          },
          {
            name: "magic_technology_source",
            type: "textarea",
            placeholder: "Technological enhancement of magic or vice versa...",
          },
          {
            name: "magic_technology_limits",
            type: "textarea",
            placeholder:
              "Conflict between magical and non-magical solutions...",
          },
          {
            name: "magic_technology_impact",
            type: "textarea",
            placeholder:
              "Social divides, economic impacts, cultural tensions...",
          },
        ],
      },
      {
        isTitle: true,
        title: "CHARACTER MAGIC ABILITIES",
        rowClass: "magic-rule",
      },
      {
        fields: [
          {
            name: "magic_character_name",
            type: "input",
            placeholder: "Character Name",
          },
          {
            name: "magic_character_mechanics",
            type: "textarea",
            placeholder: "Their specific magical abilities and style...",
          },
          {
            name: "magic_character_source",
            type: "textarea",
            placeholder: "Where their power comes from...",
          },
          {
            name: "magic_character_limits",
            type: "textarea",
            placeholder: "Personal limitations and costs they face...",
          },
          {
            name: "magic_character_impact",
            type: "textarea",
            placeholder: "How their magic affects their role in society...",
          },
        ],
      },
    ],
  },
  {
    key: "structure",
    title: "Story Structure & Beats",
    subtitle: "Three-Act Structure with Seven-Point Story Arc",
    instructions:
      "This combines traditional three-act structure with the seven-point story structure. Fill in your major plot points and ensure each beat serves both character development and plot advancement.",
    columns: [
      { header: "Act", width: "10%" },
      { header: "Story Point", width: "15%" },
      { header: "% Mark", width: "8%" },
      { header: "Plot Event", width: "25%" },
      { header: "Character Development", width: "20%" },
      { header: "Stakes/Tension", width: "12%" },
      { header: "Status", width: "10%" },
    ],
    rows: [
      { isTitle: true, title: "ACT I - SETUP (25%)", rowClass: "plot-point" },
      {
        fields: [
          { type: "static", value: "I" },
          { type: "static", value: "Hook/Opening" },
          { type: "static", value: "0-5%" },
          {
            name: "structure_setup_event",
            type: "textarea",
            placeholder:
              "Compelling opening scene that establishes tone and stakes.",
          },
          {
            name: "structure_setup_character",
            type: "textarea",
            placeholder: "Introduce protagonist in their normal world.",
          },
          {
            name: "structure_setup_stakes",
            type: "textarea",
            placeholder: "Initial tension or mystery to hook reader.",
          },
          {
            name: "structure_setup_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "I" },
          { type: "static", value: "Inciting Incident" },
          { type: "static", value: "10-15%" },
          {
            name: "structure_incident_event",
            type: "textarea",
            placeholder: "The event that kicks off the main story...",
          },
          {
            name: "structure_incident_character",
            type: "textarea",
            placeholder: "First challenge to protagonist's status quo...",
          },
          {
            name: "structure_incident_stakes",
            type: "textarea",
            placeholder: "Introduction of central conflict...",
          },
          {
            name: "structure_incident_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "I" },
          { type: "static", value: "Plot Point 1" },
          { type: "static", value: "20-25%" },
          {
            name: "structure_plot1_event",
            type: "textarea",
            placeholder:
              "Decision/event that launches protagonist into Act II...",
          },
          {
            name: "structure_plot1_character",
            type: "textarea",
            placeholder: "Protagonist accepts the call to adventure...",
          },
          {
            name: "structure_plot1_stakes",
            type: "textarea",
            placeholder: "Point of no return - stakes are raised...",
          },
          {
            name: "structure_plot1_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        isTitle: true,
        title: "ACT II-A - RISING ACTION (25%)",
        rowClass: "plot-point",
      },
      {
        fields: [
          { type: "static", value: "II-A" },
          { type: "static", value: "Pinch Point 1" },
          { type: "static", value: "35-40%" },
          {
            name: "structure_pinch1_event",
            type: "textarea",
            placeholder: "First major obstacle/antagonist pressure...",
          },
          {
            name: "structure_pinch1_character",
            type: "textarea",
            placeholder: "Protagonist struggles with new world/situation...",
          },
          {
            name: "structure_pinch1_stakes",
            type: "textarea",
            placeholder: "Show antagonist's power and threat level...",
          },
          {
            name: "structure_pinch1_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "II-A" },
          { type: "static", value: "Midpoint" },
          { type: "static", value: "45-55%" },
          {
            name: "structure_midpoint_event",
            type: "textarea",
            placeholder: "Major revelation, victory, or shift in story...",
          },
          {
            name: "structure_midpoint_character",
            type: "textarea",
            placeholder: "Protagonist's understanding/goal changes...",
          },
          {
            name: "structure_midpoint_stakes",
            type: "textarea",
            placeholder: "Stakes raised, new information revealed...",
          },
          {
            name: "structure_midpoint_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        isTitle: true,
        title: "ACT II-B - RISING ACTION (25%)",
        rowClass: "plot-point",
      },
      {
        fields: [
          { type: "static", value: "II-B" },
          { type: "static", value: "Pinch Point 2" },
          { type: "static", value: "60-65%" },
          {
            name: "structure_pinch2_event",
            type: "textarea",
            placeholder: "Second major pressure from antagonist...",
          },
          {
            name: "structure_pinch2_character",
            type: "textarea",
            placeholder: "Protagonist's resolve tested further...",
          },
          {
            name: "structure_pinch2_stakes",
            type: "textarea",
            placeholder:
              "Antagonist's plan becomes clearer/more threatening...",
          },
          {
            name: "structure_pinch2_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "II-B" },
          { type: "static", value: "Plot Point 2" },
          { type: "static", value: "70-75%" },
          {
            name: "structure_plot2_event",
            type: "textarea",
            placeholder: "All is lost moment - darkest hour...",
          },
          {
            name: "structure_plot2_character",
            type: "textarea",
            placeholder: "Protagonist hits rock bottom, major loss...",
          },
          {
            name: "structure_plot2_stakes",
            type: "textarea",
            placeholder: "Highest tension - seems impossible to win...",
          },
          {
            name: "structure_plot2_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        isTitle: true,
        title: "ACT III - RESOLUTION (25%)",
        rowClass: "plot-point",
      },
      {
        fields: [
          { type: "static", value: "III" },
          { type: "static", value: "Climax" },
          { type: "static", value: "80-90%" },
          {
            name: "structure_climax_event",
            type: "textarea",
            placeholder: "Final confrontation with antagonist...",
          },
          {
            name: "structure_climax_character",
            type: "textarea",
            placeholder: "Protagonist's complete character arc culmination...",
          },
          {
            name: "structure_climax_stakes",
            type: "textarea",
            placeholder: "Highest action, everything at stake...",
          },
          {
            name: "structure_climax_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "III" },
          { type: "static", value: "Resolution" },
          { type: "static", value: "90-100%" },
          {
            name: "structure_resolution_event",
            type: "textarea",
            placeholder: "Aftermath, new normal, loose ends tied up...",
          },
          {
            name: "structure_resolution_character",
            type: "textarea",
            placeholder: "Show character growth and change...",
          },
          {
            name: "structure_resolution_stakes",
            type: "textarea",
            placeholder: "Tension released, satisfaction achieved...",
          },
          {
            name: "structure_resolution_status",
            type: "input",
            placeholder: "Draft/Done",
          },
        ],
      },
    ],
  },
  {
    key: "trilogy",
    title: "Trilogy Arc & Series Planning",
    subtitle: "Plan your overarching trilogy structure and series progression",
    instructions:
      "Each book should have its own complete arc while contributing to the larger trilogy story. Consider escalating stakes, character growth across books, and satisfying conclusions.",
    columns: [
      { header: "Book", width: "10%" },
      { header: "Title/Theme", width: "15%" },
      { header: "Central Conflict", width: "25%" },
      { header: "Character Arcs", width: "20%" },
      { header: "Stakes", width: "15%" },
      { header: "Resolution & Setup", width: "15%" },
    ],
    rows: [
      { isTitle: true, title: "TRILOGY OVERVIEW", rowClass: "trilogy-book" },
      {
        fields: [
          { type: "static", value: "Series" },
          {
            name: "trilogy_overview_titleTheme",
            type: "input",
            placeholder: "Trilogy Title & Core Theme",
          },
          {
            name: "trilogy_overview_conflict",
            type: "textarea",
            placeholder:
              "What is the overarching conflict that spans all three books?",
          },
          {
            name: "trilogy_overview_characterArcs",
            type: "textarea",
            placeholder:
              "How do main characters evolve across the entire trilogy?",
          },
          {
            name: "trilogy_overview_stakes",
            type: "textarea",
            placeholder:
              "What are the ultimate stakes for the world/characters?",
          },
          {
            name: "trilogy_overview_resolution",
            type: "textarea",
            placeholder:
              "How does the trilogy conclude? What's the final state of the world?",
          },
        ],
      },
      {
        isTitle: true,
        title: "BOOK ONE - FOUNDATION",
        rowClass: "trilogy-book",
      },
      {
        fields: [
          { type: "static", value: "Book 1" },
          {
            name: "trilogy_book1_title",
            type: "input",
            placeholder: "Title & Central Theme",
          },
          {
            name: "trilogy_book1_conflict",
            type: "textarea",
            placeholder: "The primary conflict/quest of this book…",
          },
          {
            name: "trilogy_book1_characterArcs",
            type: "textarea",
            placeholder: "Character introductions and initial growth…",
          },
          {
            name: "trilogy_book1_stakes",
            type: "textarea",
            placeholder: "What's at risk in this book specifically?",
          },
          {
            name: "trilogy_book1_resolution",
            type: "textarea",
            placeholder: "How does it resolve while setting up Book 2?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "Opening Hook" },
          {
            name: "trilogy_book1_hook_conflict",
            type: "textarea",
            placeholder:
              "How does the series begin? What draws readers in immediately?",
          },
          {
            name: "trilogy_book1_hook_character",
            type: "textarea",
            placeholder: "How are main characters introduced?",
          },
          {
            name: "trilogy_book1_hook_stakes",
            type: "textarea",
            placeholder: "Initial tension and world-building…",
          },
          {
            name: "trilogy_book1_hook_resolution",
            type: "textarea",
            placeholder: "What questions are raised?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "Major Revelation" },
          {
            name: "trilogy_book1_revelation_conflict",
            type: "textarea",
            placeholder: "Key discovery or twist that changes everything…",
          },
          {
            name: "trilogy_book1_revelation_character",
            type: "textarea",
            placeholder: "How do characters react to this revelation?",
          },
          {
            name: "trilogy_book1_revelation_stakes",
            type: "textarea",
            placeholder: "How do stakes escalate?",
          },
          {
            name: "trilogy_book1_revelation_resolution",
            type: "textarea",
            placeholder: "What new questions arise?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "Book 1 Climax" },
          {
            name: "trilogy_book1_climax_conflict",
            type: "textarea",
            placeholder: "The final confrontation/resolution of Book 1…",
          },
          {
            name: "trilogy_book1_climax_character",
            type: "textarea",
            placeholder: "Character growth demonstrated…",
          },
          {
            name: "trilogy_book1_climax_stakes",
            type: "textarea",
            placeholder: "What is won or lost?",
          },
          {
            name: "trilogy_book1_climax_resolution",
            type: "textarea",
            placeholder: "How does it set up the larger conflict?",
          },
        ],
      },
      {
        isTitle: true,
        title: "BOOK TWO - COMPLICATION",
        rowClass: "trilogy-book",
      },
      {
        fields: [
          { type: "static", value: "Book 2" },
          {
            name: "trilogy_book2_title",
            type: "input",
            placeholder: "Title & Central Theme",
          },
          {
            name: "trilogy_book2_conflict",
            type: "textarea",
            placeholder: "How does the conflict escalate and complicate?",
          },
          {
            name: "trilogy_book2_characterArcs",
            type: "textarea",
            placeholder: "Deeper character development and relationships…",
          },
          {
            name: "trilogy_book2_stakes",
            type: "textarea",
            placeholder: "Higher stakes than Book 1…",
          },
          {
            name: "trilogy_book2_resolution",
            type: "textarea",
            placeholder: "Major losses and setup for final book…",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "New Challenges" },
          {
            name: "trilogy_book2_challenges_conflict",
            type: "textarea",
            placeholder: "What new obstacles and enemies emerge?",
          },
          {
            name: "trilogy_book2_challenges_character",
            type: "textarea",
            placeholder: "How do characters handle increased pressure?",
          },
          {
            name: "trilogy_book2_challenges_stakes",
            type: "textarea",
            placeholder: "Expansion of world and mythology…",
          },
          {
            name: "trilogy_book2_challenges_resolution",
            type: "textarea",
            placeholder: "What illusions are shattered?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "Relationships & Alliances" },
          {
            name: "trilogy_book2_relationships_conflict",
            type: "textarea",
            placeholder: "How do relationships deepen or fracture?",
          },
          {
            name: "trilogy_book2_relationships_character",
            type: "textarea",
            placeholder: "Character betrayals, romance, friendship tests…",
          },
          {
            name: "trilogy_book2_relationships_stakes",
            type: "textarea",
            placeholder: "Political and personal complications…",
          },
          {
            name: "trilogy_book2_relationships_resolution",
            type: "textarea",
            placeholder: "Who can be trusted?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "Empire Strikes Back Moment" },
          {
            name: "trilogy_book2_back_conflict",
            type: "textarea",
            placeholder: "The darkest hour – major defeat or loss…",
          },
          {
            name: "trilogy_book2_back_character",
            type: "textarea",
            placeholder: "How are characters broken down?",
          },
          {
            name: "trilogy_book2_back_stakes",
            type: "textarea",
            placeholder: "What seems lost forever?",
          },
          {
            name: "trilogy_book2_back_resolution",
            type: "textarea",
            placeholder: "How does this set up the final confrontation?",
          },
        ],
      },
      {
        isTitle: true,
        title: "BOOK THREE - RESOLUTION",
        rowClass: "trilogy-book",
      },
      {
        fields: [
          { type: "static", value: "Book 3" },
          {
            name: "trilogy_book3_title",
            type: "input",
            placeholder: "Title & Central Theme",
          },
          {
            name: "trilogy_book3_conflict",
            type: "textarea",
            placeholder: "Final confrontation with series antagonist…",
          },
          {
            name: "trilogy_book3_characterArcs",
            type: "textarea",
            placeholder: "Character arcs reach full completion…",
          },
          {
            name: "trilogy_book3_stakes",
            type: "textarea",
            placeholder: "Ultimate stakes – everything on the line…",
          },
          {
            name: "trilogy_book3_resolution",
            type: "textarea",
            placeholder: "Satisfying resolution of all plot threads…",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "Gathering Forces" },
          {
            name: "trilogy_book3_gathering_conflict",
            type: "textarea",
            placeholder: "How do heroes recover and prepare for final battle?",
          },
          {
            name: "trilogy_book3_gathering_character",
            type: "textarea",
            placeholder: "Character redemption and growth from failures…",
          },
          {
            name: "trilogy_book3_gathering_stakes",
            type: "textarea",
            placeholder: "Building toward final confrontation…",
          },
          {
            name: "trilogy_book3_gathering_resolution",
            type: "textarea",
            placeholder: "What alliances are forged?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "Final Battles" },
          {
            name: "trilogy_book3_final_conflict",
            type: "textarea",
            placeholder: "The ultimate confrontation(s)…",
          },
          {
            name: "trilogy_book3_final_character",
            type: "textarea",
            placeholder: "How do characters use everything they've learned?",
          },
          {
            name: "trilogy_book3_final_stakes",
            type: "textarea",
            placeholder: "The fate of the world decided…",
          },
          {
            name: "trilogy_book3_final_resolution",
            type: "textarea",
            placeholder: "What sacrifices are made?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "" },
          { type: "static", value: "New Beginning" },
          {
            name: "trilogy_book3_new_conflict",
            type: "textarea",
            placeholder:
              "How has the world changed? What's the new status quo?",
          },
          {
            name: "trilogy_book3_new_character",
            type: "textarea",
            placeholder: "Where do characters end up? How have they grown?",
          },
          {
            name: "trilogy_book3_new_stakes",
            type: "textarea",
            placeholder: "What has been saved or transformed?",
          },
          {
            name: "trilogy_book3_new_resolution",
            type: "textarea",
            placeholder: "What hope exists for the future?",
          },
        ],
      },
    ],
  },
  {
    key: "timeline",
    title: "Timeline & Chronology",
    subtitle: "Track events across your world's history and story timeline",
    instructions:
      "Maintain consistency in your world's timeline. Track both historical events and your story's present-day chronology.",
    columns: [
      { header: "Time Period", width: "12%" },
      { header: "Date/Age", width: "15%" },
      { header: "Major Events", width: "25%" },
      { header: "Impact on World", width: "20%" },
      { header: "Relevance to Story", width: "18%" },
      { header: "Notes", width: "10%" },
    ],
    rows: [
      { isTitle: true, title: "ANCIENT HISTORY" },
      {
        fields: [
          {
            name: "timeline_ancient_period",
            type: "input",
            placeholder: "e.g., Creation Era",
          },
          {
            name: "timeline_ancient_date",
            type: "input",
            placeholder: "Before recorded time",
          },
          {
            name: "timeline_ancient_events",
            type: "textarea",
            placeholder:
              "World creation, first beings, establishment of natural laws...",
          },
          {
            name: "timeline_ancient_impact",
            type: "textarea",
            placeholder: "Foundation of reality, magic, natural order...",
          },
          {
            name: "timeline_ancient_relevance",
            type: "textarea",
            placeholder: "Mythology referenced in story, power sources...",
          },
          {
            name: "timeline_ancient_notes",
            type: "input",
            placeholder: "Status",
          },
        ],
      },
      {
        fields: [
          {
            name: "timeline_ageHeroes_period",
            type: "input",
            placeholder: "e.g., Age of Heroes",
          },
          {
            name: "timeline_ageHeroes_date",
            type: "input",
            placeholder: "~3000 years ago",
          },
          {
            name: "timeline_ageHeroes_events",
            type: "textarea",
            placeholder: "Legendary figures, great deeds, epic battles...",
          },
          {
            name: "timeline_ageHeroes_impact",
            type: "textarea",
            placeholder: "Established kingdoms, cultural foundations...",
          },
          {
            name: "timeline_ageHeroes_relevance",
            type: "textarea",
            placeholder: "Legends inspiring characters, ancient artifacts...",
          },
          {
            name: "timeline_ageHeroes_notes",
            type: "input",
            placeholder: "Status",
          },
        ],
      },
      { isTitle: true, title: "RECENT HISTORY" },
      {
        fields: [
          {
            name: "timeline_greatWar_period",
            type: "input",
            placeholder: "e.g., The Great War",
          },
          {
            name: "timeline_greatWar_date",
            type: "input",
            placeholder: "50 years ago",
          },
          {
            name: "timeline_greatWar_events",
            type: "textarea",
            placeholder: "Major conflict that shaped current world...",
          },
          {
            name: "timeline_greatWar_impact",
            type: "textarea",
            placeholder:
              "Political changes, population shifts, new alliances...",
          },
          {
            name: "timeline_greatWar_relevance",
            type: "textarea",
            placeholder: "Character backstories, current tensions...",
          },
          {
            name: "timeline_greatWar_notes",
            type: "input",
            placeholder: "Status",
          },
        ],
      },
      {
        fields: [
          {
            name: "timeline_darkYears_period",
            type: "input",
            placeholder: "e.g., The Dark Years",
          },
          {
            name: "timeline_darkYears_date",
            type: "input",
            placeholder: "20 years ago",
          },
          {
            name: "timeline_darkYears_events",
            type: "textarea",
            placeholder: "Period of hardship or mysterious events...",
          },
          {
            name: "timeline_darkYears_impact",
            type: "textarea",
            placeholder: "Economic, social, or magical consequences...",
          },
          {
            name: "timeline_darkYears_relevance",
            type: "textarea",
            placeholder: "How this affects current story events...",
          },
          {
            name: "timeline_darkYears_notes",
            type: "input",
            placeholder: "Status",
          },
        ],
      },
      { isTitle: true, title: "STORY TIMELINE - BOOK 1" },
      {
        fields: [
          { type: "static", value: "Story Beginning" },
          {
            name: "timeline_book1_beginning_date",
            type: "input",
            placeholder: "Day 1",
          },
          {
            name: "timeline_book1_beginning_events",
            type: "textarea",
            placeholder: "Opening scene events...",
          },
          {
            name: "timeline_book1_beginning_impact",
            type: "textarea",
            placeholder: "How does this affect the immediate world?",
          },
          {
            name: "timeline_book1_beginning_relevance",
            type: "textarea",
            placeholder: "Sets up main plot...",
          },
          {
            name: "timeline_book1_beginning_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Inciting Incident" },
          {
            name: "timeline_book1_incident_date",
            type: "input",
            placeholder: "Day 3-5",
          },
          {
            name: "timeline_book1_incident_events",
            type: "textarea",
            placeholder: "The event that kicks off the adventure...",
          },
          {
            name: "timeline_book1_incident_impact",
            type: "textarea",
            placeholder: "Immediate consequences and reactions...",
          },
          {
            name: "timeline_book1_incident_relevance",
            type: "textarea",
            placeholder: "Character decisions and plot movement...",
          },
          {
            name: "timeline_book1_incident_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Major Milestone" },
          {
            name: "timeline_book1_milestone_date",
            type: "input",
            placeholder: "Day 30",
          },
          {
            name: "timeline_book1_milestone_events",
            type: "textarea",
            placeholder: "Significant plot development...",
          },
          {
            name: "timeline_book1_milestone_impact",
            type: "textarea",
            placeholder: "Broader impact on world/other characters...",
          },
          {
            name: "timeline_book1_milestone_relevance",
            type: "textarea",
            placeholder: "Character growth and story progression...",
          },
          {
            name: "timeline_book1_milestone_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      { isTitle: true, title: "STORY TIMELINE - BOOK 2" },
      {
        fields: [
          { type: "static", value: "Story Beginning" },
          {
            name: "timeline_book2_beginning_date",
            type: "input",
            placeholder: "Day X",
          },
          {
            name: "timeline_book2_beginning_events",
            type: "textarea",
            placeholder: "Opening scene events...",
          },
          {
            name: "timeline_book2_beginning_impact",
            type: "textarea",
            placeholder: "How does this affect the immediate world?",
          },
          {
            name: "timeline_book2_beginning_relevance",
            type: "textarea",
            placeholder: "Sets up main plot...",
          },
          {
            name: "timeline_book2_beginning_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Inciting Incident" },
          {
            name: "timeline_book2_incident_date",
            type: "input",
            placeholder: "Day X",
          },
          {
            name: "timeline_book2_incident_events",
            type: "textarea",
            placeholder: "The event that kicks off the adventure...",
          },
          {
            name: "timeline_book2_incident_impact",
            type: "textarea",
            placeholder: "Immediate consequences and reactions...",
          },
          {
            name: "timeline_book2_incident_relevance",
            type: "textarea",
            placeholder: "Character decisions and plot movement...",
          },
          {
            name: "timeline_book2_incident_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Major Milestone" },
          {
            name: "timeline_book2_milestone_date",
            type: "input",
            placeholder: "Day X",
          },
          {
            name: "timeline_book2_milestone_events",
            type: "textarea",
            placeholder: "Significant plot development...",
          },
          {
            name: "timeline_book2_milestone_impact",
            type: "textarea",
            placeholder: "Broader impact on world/other characters...",
          },
          {
            name: "timeline_book2_milestone_relevance",
            type: "textarea",
            placeholder: "Character growth and story progression...",
          },
          {
            name: "timeline_book2_milestone_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },

      { isTitle: true, title: "STORY TIMELINE - BOOK 3" },
      {
        fields: [
          { type: "static", value: "Story Beginning" },
          {
            name: "timeline_book3_beginning_date",
            type: "input",
            placeholder: "Day X",
          },
          {
            name: "timeline_book3_beginning_events",
            type: "textarea",
            placeholder: "Opening scene events...",
          },
          {
            name: "timeline_book3_beginning_impact",
            type: "textarea",
            placeholder: "How does this affect the immediate world?",
          },
          {
            name: "timeline_book3_beginning_relevance",
            type: "textarea",
            placeholder: "Sets up main plot...",
          },
          {
            name: "timeline_book3_beginning_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Inciting Incident" },
          {
            name: "timeline_book3_incident_date",
            type: "input",
            placeholder: "Day X",
          },
          {
            name: "timeline_book3_incident_events",
            type: "textarea",
            placeholder: "The event that kicks off the adventure...",
          },
          {
            name: "timeline_book3_incident_impact",
            type: "textarea",
            placeholder: "Immediate consequences and reactions...",
          },
          {
            name: "timeline_book3_incident_relevance",
            type: "textarea",
            placeholder: "Character decisions and plot movement...",
          },
          {
            name: "timeline_book3_incident_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Major Milestone" },
          {
            name: "timeline_book3_milestone_date",
            type: "input",
            placeholder: "Day X",
          },
          {
            name: "timeline_book3_milestone_events",
            type: "textarea",
            placeholder: "Significant plot development...",
          },
          {
            name: "timeline_book3_milestone_impact",
            type: "textarea",
            placeholder: "Broader impact on world/other characters...",
          },
          {
            name: "timeline_book3_milestone_relevance",
            type: "textarea",
            placeholder: "Character growth and story progression...",
          },
          {
            name: "timeline_book3_milestone_notes",
            type: "input",
            placeholder: "Chapter/Scene",
          },
        ],
      },
      { isTitle: true, title: "STORY TIMELINE - SERIES" },
      {
        fields: [
          { type: "static", value: "Book 1 Conclusion" },
          {
            name: "timeline_series_book1Conclusion_date",
            type: "input",
            placeholder: "End of Book 1",
          },
          {
            name: "timeline_series_book1Conclusion_events",
            type: "textarea",
            placeholder: "How Book 1 ends and world state...",
          },
          {
            name: "timeline_series_book1Conclusion_impact",
            type: "textarea",
            placeholder: "Changes to world order, character status...",
          },
          {
            name: "timeline_series_book1Conclusion_relevance",
            type: "textarea",
            placeholder: "Sets up Book 2 conflicts...",
          },
          {
            name: "timeline_series_book1Conclusion_notes",
            type: "input",
            placeholder: "Time gap?",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Book 2 Beginning" },
          {
            name: "timeline_series_book2Beginning_date",
            type: "input",
            placeholder: "Start of Book 2",
          },
          {
            name: "timeline_series_book2Beginning_events",
            type: "textarea",
            placeholder: "New situations and complications...",
          },
          {
            name: "timeline_series_book2Beginning_impact",
            type: "textarea",
            placeholder: "How the world has changed...",
          },
          {
            name: "timeline_series_book2Beginning_relevance",
            type: "textarea",
            placeholder: "Character development continuation...",
          },
          {
            name: "timeline_series_book2Beginning_notes",
            type: "input",
            placeholder: "Time passed",
          },
        ],
      },
      {
        fields: [
          { type: "static", value: "Series Climax" },
          {
            name: "timeline_series_climax_date",
            type: "input",
            placeholder: "Book 3 climax",
          },
          {
            name: "timeline_series_climax_events",
            type: "textarea",
            placeholder: "Final confrontation and resolution...",
          },
          {
            name: "timeline_series_climax_impact",
            type: "textarea",
            placeholder: "Ultimate fate of the world...",
          },
          {
            name: "timeline_series_climax_relevance",
            type: "textarea",
            placeholder: "Character arc conclusions...",
          },
          {
            name: "timeline_series_climax_notes",
            type: "input",
            placeholder: "Final state",
          },
        ],
      },
    ],
  },
];

function Spreadsheet({ activeTab }) {
  const section = sections.find((s) => s.key === activeTab);
  if (!section) return null;

  return (
    <div id={section.key} className="tab-content active">
      <div className="spreadsheet">
        <div className="spreadsheet-header">
          <h2>{section.title}</h2>
          <p>{section.subtitle}</p>
        </div>
        <div className="instructions">
          <strong>Instructions:</strong> {section.instructions}
        </div>
        <div className="scroll-container">
          <table>
            <thead>
              <tr>
                {section.columns.map((col) => (
                  <th key={col.header} style={{ width: col.width }}>
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, idx) => {
                if (row.isTitle) {
                  // Combine section-title with any custom rowClass (e.g., character-arc)
                  const classes = ["section-title", row.rowClass]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <tr key={idx} className={classes}>
                      <td colSpan={section.columns.length}>{row.title}</td>
                    </tr>
                  );
                }

                return (
                  <tr key={idx} className={row.rowClass || ""}>
                    {row.category && <td>{row.category}</td>}
                    {row.fields.map((f, fIdx) => (
                      <td key={fIdx}>
                        {f.type === "static" ? (
                          f.value
                        ) : f.type === "textarea" ? (
                          <textarea name={f.name} placeholder={f.placeholder} />
                        ) : (
                          <input name={f.name} placeholder={f.placeholder} />
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Spreadsheet;
