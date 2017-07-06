class Guild {
  constructor(guildId) {
    this.guildId = guildId;
    this.roles = {
      modRoles: [],
      rankRoles: [],
      mutedRoleId: null
    };
    this.channels = {
      gambling: null,
      modLog: null,
      welcome: null
    };
    this.settings = {
      globalChattingMultiplier: 1,
      welcomeMessage: null
    };
    this.misc = {
      caseNumber: 1,
      trivia:[]
    };
  }
}

module.exports = Guild;