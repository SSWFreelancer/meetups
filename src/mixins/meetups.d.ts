declare module "@/mixins/meetups.js" {
  const meetupsData: {
    data: () => {
      meetups: Array<{
        id: number;
        type: string;
        title: string;
        description: string;
        imageId: number;
        image: string;
        date: number;
        dateIso: string;
        organizer: string;
        place: string;
      }>;
    };
  };

  export default meetupsData;
}
