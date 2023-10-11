import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLoaderElement } from '@aracna/icons-feather-web/elements/loader-element'

export const IconFeatherLoader: ElementComponent<IconFeatherLoaderElement, IconProps> = createBaseElementComponent<
  IconFeatherLoaderElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-loader', IconFeatherLoaderElement)
