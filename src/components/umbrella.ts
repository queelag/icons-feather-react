import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUmbrellaElement } from '@aracna/icons-feather-web/elements/umbrella-element'

export const IconFeatherUmbrella: ElementComponent<IconFeatherUmbrellaElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUmbrellaElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-umbrella', IconFeatherUmbrellaElement)
