import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTrelloElement } from '@aracna/icons-feather-web/elements/trello-element'

export const IconFeatherTrello: ElementComponent<IconFeatherTrelloElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrelloElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-trello', IconFeatherTrelloElement)
