import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBoxElement } from '@aracna/icons-feather-web/elements/box-element'

export const IconFeatherBox: ElementComponent<IconFeatherBoxElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBoxElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-box', IconFeatherBoxElement)
