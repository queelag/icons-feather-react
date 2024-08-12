import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFrownElement } from '@aracna/icons-feather-web/elements/frown-element'

export const IconFeatherFrown: ElementComponent<IconFeatherFrownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFrownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-frown', IconFeatherFrownElement)
