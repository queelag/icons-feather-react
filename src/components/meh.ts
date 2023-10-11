import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMehElement } from '@aracna/icons-feather-web/elements/meh-element'

export const IconFeatherMeh: ElementComponent<IconFeatherMehElement, IconProps> = createBaseElementComponent<
  IconFeatherMehElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-meh', IconFeatherMehElement)
