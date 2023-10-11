import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCommandElement } from '@aracna/icons-feather-web/elements/command-element'

export const IconFeatherCommand: ElementComponent<IconFeatherCommandElement, IconProps> = createBaseElementComponent<
  IconFeatherCommandElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-command', IconFeatherCommandElement)
