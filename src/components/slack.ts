import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSlackElement } from '@aracna/icons-feather-web/elements/slack-element'

export const IconFeatherSlack: ElementComponent<IconFeatherSlackElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSlackElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-slack', IconFeatherSlackElement)
