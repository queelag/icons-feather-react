import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLoaderElement } from '@aracna/icons-feather-web/elements/loader-element'

export const IconFeatherLoader: ElementComponent<IconFeatherLoaderElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLoaderElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-loader', IconFeatherLoaderElement)
