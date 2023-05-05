import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTrelloElement } from '@aracna/icons-feather-web/elements/trello-element.js'

export const IconFeatherTrello: ElementComponent<IconFeatherTrelloElement, IconProps> = createBaseElementComponent<
  IconFeatherTrelloElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-trello', IconFeatherTrelloElement)
