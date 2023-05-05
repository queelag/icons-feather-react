import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSlackElement } from '@aracna/icons-feather-web/elements/slack-element.js'

export const IconFeatherSlack: ElementComponent<IconFeatherSlackElement, IconProps> = createBaseElementComponent<
  IconFeatherSlackElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-slack', IconFeatherSlackElement)
