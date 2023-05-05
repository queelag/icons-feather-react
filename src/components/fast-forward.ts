import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFastForwardElement } from '@aracna/icons-feather-web/elements/fast-forward-element.js'

export const IconFeatherFastForward: ElementComponent<IconFeatherFastForwardElement, IconProps> = createBaseElementComponent<
  IconFeatherFastForwardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-fast-forward', IconFeatherFastForwardElement)
