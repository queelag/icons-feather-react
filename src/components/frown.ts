import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFrownElement } from '@aracna/icons-feather-web/elements/frown-element'

export const IconFeatherFrown: ElementComponent<IconFeatherFrownElement, IconProps> = createBaseElementComponent<
  IconFeatherFrownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-frown', IconFeatherFrownElement)
