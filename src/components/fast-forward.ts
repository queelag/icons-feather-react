import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFastForwardElement } from '@aracna/icons-feather-web/elements/fast-forward-element'

export const IconFeatherFastForward: ElementComponent<IconFeatherFastForwardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFastForwardElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-fast-forward', IconFeatherFastForwardElement)
