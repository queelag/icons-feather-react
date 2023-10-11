import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShareElement } from '@aracna/icons-feather-web/elements/share-element'

export const IconFeatherShare: ElementComponent<IconFeatherShareElement, IconProps> = createBaseElementComponent<
  IconFeatherShareElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-share', IconFeatherShareElement)
