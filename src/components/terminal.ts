import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTerminalElement } from '@aracna/icons-feather-web/elements/terminal-element'

export const IconFeatherTerminal: ElementComponent<IconFeatherTerminalElement, IconProps> = createBaseElementComponent<
  IconFeatherTerminalElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-terminal', IconFeatherTerminalElement)
