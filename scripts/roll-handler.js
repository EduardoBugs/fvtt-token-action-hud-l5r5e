export let RollHandler = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
  /**
   * Extends Token Action HUD Core's RollHandler class and handles action events triggered when an action is clicked
   */
  RollHandler = class RollHandler extends coreModule.api.RollHandler {
    /**
     * Handle action click
     * Called by Token Action HUD Core when an action is left or right-clicked
     * @override
     * @param {object} event        The event
     * @param {string} encodedValue The encoded value
     */
    async handleActionClick(event, encodedValue) {
      const [actionTypeId, actionId] = encodedValue.split('|')

      const renderable = ['item', 'weapons', 'technique', 'armor']

      const rightClickAction = ['ring']

      if (renderable.includes(actionTypeId) && this.isRenderItem()) {
        return this.renderItem(this.actor, actionId)
      }

      if (rightClickAction.includes(actionTypeId) && this.isRenderItem()) {
        if (actionTypeId === 'ring') {
          await this.#handleStanceChangeAction(event, this.actor, actionId)
          return
        }
      }

      const knownCharacters = ['character']

      // If single actor is selected
      if (this.actor) {
        await this.#handleAction(event, this.actor, this.token, actionTypeId, actionId)
        return
      }

      const controlledTokens = canvas.tokens.controlled
        .filter((token) => knownCharacters.includes(token.actor?.type))

      // If multiple actors are selected
      for (const token of controlledTokens) {
        const actor = token.actor
        await this.#handleAction(event, actor, token, actionTypeId, actionId)
      }
    }

    /**
     * Handle action hover
     * Called by Token Action HUD Core when an action is hovered on or off
     * @override
     * @param {object} event        The event
     * @param {string} encodedValue The encoded value
     */
    async handleActionHover(event, encodedValue) { }

    /**
     * Handle group click
     * Called by Token Action HUD Core when a group is right-clicked while the HUD is locked
     * @override
     * @param {object} event The event
     * @param {object} group The group
     */
    async handleGroupClick(event, group) { }

    /**
     * Handle action
     * @private
     * @param {object} event        The event
     * @param {object} actor        The actor
     * @param {object} token        The token
     * @param {string} actionTypeId The action type id
     * @param {string} actionId     The actionId
     */
    async #handleAction(event, actor, token, actionTypeId, actionId) {
      switch (actionTypeId) {
        case 'weapons':
          this.#handleWeaponAction(event, actor, actionId)
          break
        case 'ring':
          this.#handleRingAction(event, actor, actionId)
          break
        case 'skill':
          this.#handleSkillAction(event, actor, actionId)
          break
        case 'technique':
          this.#handleTechniqueAction(event, actor, actionId)
          break
        case 'armor':
          await this.#handleItemAction(event, actor, actionId)
          break
        case 'equipment':
          await this.#handleItemAction(event, actor, actionId)
          break
        case 'utility':
          this.#handleUtilityAction(token, actionId)
          break
      }
    }

    /**
     * Handle item action
     * @private
     * @param {object} event    The event
     * @param {object} actor    The actor
     * @param {string} actionId The action id
     */
    async #handleItemAction(event, actor, actionId) {
      const item = actor.items.get(actionId)
      await game.l5r5e.HelpersL5r5e.sendToChat(item)
    }

    /**
     * Handle stance change action
     * @private
     * @param {object} event    The event
     * @param {object} actor    The actor
     * @param {string} actionId The action id
     */
    async #handleStanceChangeAction(_event, actor, actionId) {
      //console.log(game.l5r5e)
      // if (actor.system.stance !== actionId) {
      //   await new game.l5r5e.ActorL5r5e(actor).update({
      //     stance: actionId
      //   })
      // }
    }

    /**
     * Handle weapon action
     * @private
     * @param {object} event    The event
     * @param {object} actor    The actor
     * @param {string} actionId The action id
     */
    #handleWeaponAction(_event, actor, actionId) {
      const weapon = actor.items.get(actionId)
      new game.l5r5e.DicePickerDialog({
        actor,
        item: weapon,
        skillId: weapon.system.skill
      }).render(true);
    }

    /**
     * Handle ring action
     * @private
     * @param {object} event    The event
     * @param {object} actor    The actor
     * @param {string} actionId The action id
     */
    #handleRingAction(_event, actor, actionId) {
      new game.l5r5e.DicePickerDialog({
        actor,
        ringId: actionId
      }).render(true);
    }

    /**
     * Handle skill action
     * @private
     * @param {object} event    The event
     * @param {object} actor    The actor
     * @param {string} actionId The action id
     */
    #handleSkillAction(_event, actor, actionId) {
      new game.l5r5e.DicePickerDialog({
        actor,
        skillId: actionId
      }).render(true);
    }

    /**
     * Handle technique action
     * @private
     * @param {object} event    The event
     * @param {object} actor    The actor
     * @param {string} actionId The action id
     */
    #handleTechniqueAction(_event, actor, actionId) {
      const technique = actor.items.get(actionId)

      if (!technique || technique.type !== "technique" || !technique.system.skill) {
        return;
      }

      new game.l5r5e.DicePickerDialog({
        actor,
        item: technique,
        skillsList: technique.system.skill,
        ringId: technique.system.ring,
        difficulty: technique.system.difficulty
      }).render(true);
    }

    /**
     * Handle utility action
     * @private
     * @param {object} token    The token
     * @param {string} actionId The action id
     */
    async #handleUtilityAction(token, actionId) {
      switch (actionId) {
        case 'endTurn':
          if (game.combat?.current?.tokenId === token.id) {
            await game.combat?.nextTurn()
          }
          break
      }
    }
  }
})
