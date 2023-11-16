import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUmbrellaElement } from '@aracna/icons-feather-web/elements/umbrella-element'

export const IconFeatherUmbrella: ElementComponent<IconFeatherUmbrellaElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUmbrellaElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-umbrella', IconFeatherUmbrellaElement)
