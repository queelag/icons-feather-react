import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTrelloElement } from '@aracna/icons-feather-web/elements/trello-element'

export const IconFeatherTrello: ElementComponent<IconFeatherTrelloElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrelloElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-trello', IconFeatherTrelloElement)
