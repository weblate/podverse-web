const shortid = require('shortid');

'use strict';

module.exports = function(sequelize, DataTypes) {

  // You could call this a clip or you could call it an episode.
  // I would consider if startTime && endTime are null, then it
  // is referencing the entire episode.

  const mediaRef = sequelize.define('mediaRef', {

    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      defaultValue: function () {
        return shortid.generate();
      }
    },

    startTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validation: {
        isNumeric: true
      }
    },

    endTime: {
      type: DataTypes.INTEGER,
      validation: {
        isNumeric: true
      }
    },

    title: DataTypes.TEXT,

    description: DataTypes.TEXT,

    ownerId: DataTypes.TEXT,

    ownerName: DataTypes.TEXT,

    dateCreated: DataTypes.DATE,

    lastUpdated: DataTypes.DATE,

    podcastTitle: DataTypes.TEXT,

    podcastFeedUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validation: {
        isUrl: true
      }
    },

    podcastImageUrl: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
    },

    episodeTitle: DataTypes.TEXT,

    episodeMediaUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validation: {
        isUrl: true
      }
    },

    episodeImageUrl: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
    },

    episodeLinkUrl: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
    },

    episodePubDate: DataTypes.DATE,

    episodeSummary: DataTypes.TEXT,

    episodeDuration: DataTypes.INTEGER,

    pastHourTotalUniquePageviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    pastDayTotalUniquePageviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    pastWeekTotalUniquePageviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    pastMonthTotalUniquePageviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    pastYearTotalUniquePageviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    allTimeTotalUniquePageviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    isPublic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  }, {
    updatedAt: 'lastUpdated',
    createdAt: 'dateCreated',
    setterMethods: {
        podverseUrl: function (value) {
            this.setDataValue('podverseUrl', value);
        }
    }
  });

  return mediaRef;
};
