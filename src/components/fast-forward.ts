import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFastForwardElement } from '@aracna/icons-feather-web/elements/fast-forward-element'

export const IconFeatherFastForward: ElementComponent<IconFeatherFastForwardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFastForwardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-fast-forward', IconFeatherFastForwardElement)
