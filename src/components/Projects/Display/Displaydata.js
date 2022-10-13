import Trajectory from '../../../assets/images/trajectory.png'
import Mouse from '../../../assets/images/2152_100Performance.png'
import Map from '../../../assets/images/Map.png'
export const Displaydata = [
    {
        id: {index: 0},
        name: 'FMON DeepLabCut',
        link: 'https://github.com/civond/FMOS-DeepLabCut-Pipeline',
        content: 'Using Dropbox\'s and Google Drive\'s API in Python, this script streamlines the tedious process of managing files across shared workspaces for use in DeepLabCut\'s Google Colabs notebook. ',
        image: Trajectory
    },

    {
        id: {index: 1},
        name: 'FMON Visualization',
        link: 'https://github.com/civond/FMON_DataManagement',
        content: 'To visualize historical mouse performance data, this Python script parses through raw data files on FMOS computer and compiles relevant information into one centralized spreadsheet. Then, this spreadsheet is used to generate vaious graphs and daily performance statistics using matplotlibs and pandas.',
        image: Mouse
    },

    {   id: {index: 2},
        name: 'Mapping Earthquakes',
        link: 'https://github.com/civond/Mapping_Earthquakes',
        content: 'In this project, I used JavaScript with Mapbox to create a map overlay of earthquakes that occured in the past 7 days. Includes interchangable map backgrounds, togglable earthquake magnitudes, and display popups.',
        image: Map
    },

]