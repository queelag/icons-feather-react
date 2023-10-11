import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGlobeElement } from '@aracna/icons-feather-web/elements/globe-element'

export const IconFeatherGlobe: ElementComponent<IconFeatherGlobeElement, IconProps> = createBaseElementComponent<
  IconFeatherGlobeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-globe', IconFeatherGlobeElement)
