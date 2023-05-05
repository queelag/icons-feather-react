import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUmbrellaElement } from '@aracna/icons-feather-web/elements/umbrella-element.js'

export const IconFeatherUmbrella: ElementComponent<IconFeatherUmbrellaElement, IconProps> = createBaseElementComponent<
  IconFeatherUmbrellaElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-umbrella', IconFeatherUmbrellaElement)
