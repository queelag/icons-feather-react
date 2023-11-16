import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFrownElement } from '@aracna/icons-feather-web/elements/frown-element'

export const IconFeatherFrown: ElementComponent<IconFeatherFrownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFrownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-frown', IconFeatherFrownElement)
